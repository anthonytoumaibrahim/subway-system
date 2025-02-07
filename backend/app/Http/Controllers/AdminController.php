<?php

namespace App\Http\Controllers;

use App\Mail\InvitationMail;
use App\Models\Booking;
use App\Models\CoinRequest;
use App\Models\Invitation;
use App\Models\Ride;
use App\Models\Station;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function getStatistics()
    {
        $users_count = User::count();
        $branches_count = Station::count();
        $rides_count = Ride::count();
        $bookings = Booking::with('ride')->get();
        $revenue_count = $bookings->sum(function ($booking) {
            return $booking->ride->price;
        });

        $chart_revenue = Booking::with('ride')->limit(10)->get()->groupBy(function ($booking) {
            return Carbon::parse($booking->create_date)->format('Y-m-d');
        })->map(function ($date) {
            return $date->sum(function ($booking) {
                return $booking->ride->price;
            });
        });

        // Get last 10 days for React Charts labels
        $dates = [];
        for ($i = 9; $i >= 0; $i--) {
            array_push($dates, Carbon::now()->subDays($i)->toDateString());
        }

        $users = User::limit(10)->get()->groupBy(function ($user) {
            return Carbon::parse($user->created_at)->format('Y-m-d');
        })->map(function ($date) {
            return $date->count(function ($user) {
                return $user;
            });
        });;

        return response()->json([
            'counts' => [
                'users' => $users_count,
                'branches' => $branches_count,
                'rides' => $rides_count,
                'revenue' => $revenue_count
            ],
            'chart_data' => [
                'labels' => $dates,
                'revenue' => $chart_revenue,
                'users' => $users
            ]
        ]);
    }

    public function getStations()
    {
        $stations = Station::with('manager')->get();
        return response()->json([
            'stations' => $stations
        ]);
    }

    public function createStation(Request $request)
    {
        $request->validate([
            "name" => "required",
            "email" => "required|email",
            "latitude" => "required",
            "longtitude" => "required",
            "image" => "required|image"
        ]);
        $name = $request->input("name");
        $email = $request->input("email");
        $lat = $request->input("latitude");
        $long = $request->input("longtitude");

        $image_file = $request->file("image");

        // Store image
        $fileName = time() . "." . $image_file->getClientOriginalExtension();
        $path = "/stations/";
        Storage::disk('public')->putFileAs($path, $image_file, $fileName);

        // Check if manager already exists
        $manager = User::where("email", $email)->first();

        $station = new Station();
        $station->name = $name;
        $station->image = config("app.url") . "/storage" . $path . $fileName;
        $station->latitude = $lat;
        $station->longtitude = $long;
        if ($manager) {
            $station->manager_id = $manager->id;
        }
        $station->saveOrFail();

        // Put manager email in invitations table
        if (!$manager) {
            $invitation = new Invitation();
            $invitation->email = $email;
            $invitation->station_id = $station->id;
            $invitation->saveOrFail();

            // Send email
            Mail::to($email)->send(new InvitationMail());
        }

        return [
            'success' => true,
            'message' => 'Station saved successfully.',
            'station' => $station->with('manager')->find($station->id)
        ];
    }

    public function activateStation(Request $request)
    {
        $id = $request->station_id;
        $status = $request->status;
        $station = Station::find($id);
        if ($station) {
            $station->updateOrFail([
                "status" => $status
            ]);
            return [
                "success" => true
            ];
        }
        return [
            "success" => false
        ];
    }

    public function deleteStation(Request $request)
    {
        $id = $request->station_id;
        $station = Station::find($id);
        if ($station) {
            $station->deleteOrFail();
            return [
                "success" => true
            ];
        }
        return [
            "success" => false
        ];
    }

    public function getCoinRequests()
    {
        $coin_requests = CoinRequest::with('user:id,username,bank')->where("status", "sent")->get();
        return response()->json([
            'success' => true,
            'coin_requests' => $coin_requests
        ]);
    }

    public function updateCoinRequest(Request $request)
    {
        $request_id = $request->request_id;
        $status = $request->status;
        $coin_request = CoinRequest::with('user')->find($request_id);
        if ($coin_request) {
            // Accept
            if ($status === "accept") {
                $coin_request->updateOrFail([
                    "status" => "accepted"
                ]);
                // Add balance to user
                $user_bank = $coin_request->user->bank;
                $coin_request->user->updateOrFail([
                    "bank" => $user_bank + $coin_request->amount
                ]);
            } else {
                $coin_request->updateOrFail([
                    "status" => "declined"
                ]);
            }
            return response()->json([
                'success' => true,
                'message' => $status === "accept" ? "Coin Request accepted successfully." : "Coin Request denied successfully."
            ]);
        }
        return response()->json([
            'success' => false,
            'message' => 'Could not find coin request ID.'
        ]);
    }
}
