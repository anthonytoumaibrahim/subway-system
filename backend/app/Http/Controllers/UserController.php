<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Ride;
use App\Models\Station;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\CoinRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class UserController extends Controller
{
    public function getProfile()
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        return response()->json([
            "success" => true,
            "user" => $user
        ]);
    }

    public function uploadPfp(Request $request)
    {
        $user = User::find(Auth::id());
        $request->validate([
            "image" => "required|image"
        ]);
        $image_file = $request->file("image");
        // Store image
        $fileName = time() . "." . $image_file->getClientOriginalExtension();
        $path = "/pfp/";
        Storage::disk('public')->putFileAs($path, $image_file, $fileName);

        // Update DB
        $db_path = config("app.url") . "/storage" . $path . $fileName;
        $user->updateOrFail([
            "image_url" => $db_path
        ]);

        return response([
            'success' => true,
            'image' => $db_path
        ]);
    }

    public function sendCoinRequest(Request $request)
    {
        $request->validate([
            "amount" => "required|integer"
        ]);
        // Does user have pending request?
        $lastRequest = CoinRequest::where("user_id", Auth::id())->where("status", "sent")->first();
        if ($lastRequest) {
            return [
                'success' => false,
                'message' => 'You already have a pending coin request. Please try again later.'
            ];
        }

        $coinRequest = new CoinRequest();
        $coinRequest->amount = $request->amount;
        $coinRequest->user_id = Auth::id();
        $coinRequest->saveOrFail();
        return [
            'success' => true
        ];
    }

    public function getStations()
    {
        $stations = Station::get();
        return response()->json([
            "status" => "success",
            "stations" => $stations

        ], 200);
    }

    public function getUserRides()
    {
        $user = User::findOrFail(Auth::id());

        $bookings = $user->bookings()->with(['ride.departureStation:id,name,image', 'ride.arrivalStation:id,name'])->get();

        // Extract ride details with departure station
        $rides = $bookings->map->ride;

        return response()->json([
            'status' => 'success',
            'rides' => $rides
]);
    }

    public function getStationRides(Request $req)
    {
        $station = Station::findOrFail($req->id);
        $date = Carbon::now()->format('Y-m-d H:i:s');
        $stationRides = Ride::with(["arrivalStation:id,name"])->where([["departure_station_id", $req->id], ["departure_date", ">=", $date]])->orderBy("departure_date", "DESC")->get();
        return response()->json([
            "status" => "success",
            "station" => ["name" => $station->name, "image" => $station->image],
            "stationRides" => $stationRides
        ]);
    }

    public function bookRide(Request $req)
    {   
        $user = User::findOrFail(Auth::id());
        $rideId = $req->ride_id;
        $isPass = $req->is_pass;

        $ride = Ride::findOrFail($rideId);

        // Calculate the price based on pass or ticket
        $price = $isPass ? ($ride->price * 4) : $ride->price;

        // Check if user has sufficient balance
        if ($user->bank < $price) {
            return response()->json([
                'status' => 'error',
                'message' => 'Insufficient balance.'
            ], 400);
        }

        // Deduct the amount from user balance
        $user->bank -= $price;
        $user->save();

        // Create booking
        $booking = new Booking();
        $booking->user_id = $user->id;
        $booking->ride_id = $rideId;
        $booking->create_date = now(); // For ticket, purchase time
        $booking->expire_date = $isPass ? now()->addHours(5) : $ride->arrival_date; // For pass, expire in 5 hours, for ticket, expire on arrival date
        $booking->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Booking successful.'
        ]);
    }
}
