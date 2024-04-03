<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use App\Models\Station;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            "image" => "required"
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

    public function getStations()
    {
        $stations = Station::get();
        return response()->json([
            "status" => "success",
            "stations" => $stations

        ], 200);
    }

    public function getUserRides(Request $req)
    {
        $userRides = Ride::where('user_id', $req->id);
        return response()->json([
            'status' => "sucsess",
            'userRides' => $userRides
        ], 200);
    }

    public function getStationRides(Request $req)
    {
        $stationRides = Ride::with("arrivalStation:id,name")->where("departure_station_id", $req->id)->get();
        return response()->json([
            "status" => "success",
            "stationRides" => $stationRides
        ]);
    }
}
