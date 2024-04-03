<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Ride;
use App\Models\Station;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
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
        // $id = Auth::id();
        // $ride_id = Booking::with();

     

    }

    public function getStationRides(Request $req)
    {
        $station = Station::findOrFail($req->id);
        $stationRides = Ride::with(["arrivalStation:id,name"])->where([["departure_station_id", $req -> id], ["departure_date", ">=", Carbon::now()->toDateTimeString()]])->orderBy("departure_date", "DESC")->get();
        return response()->json([
            "status" => "success",
            "station" => ["name" => $station->name, "image" => $station->image],
            "stationRides" => $stationRides
        ]);
    }
}
