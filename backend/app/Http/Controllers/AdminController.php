<?php

namespace App\Http\Controllers;

use App\Mail\InvitationMail;
use App\Models\Invitation;
use App\Models\Ride;
use App\Models\Station;
use App\Models\User;
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
        $revenue_count = 0;
        return response()->json([
            'users_count' => $users_count,
            'branches_count' => $branches_count,
            'rides_count' => $rides_count,
            'revenue_count' => $revenue_count
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
            "image" => "required"
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
}
