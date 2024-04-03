<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use App\Models\Station;
use Carbon\Carbon;
use Illuminate\Http\Request;

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

    public function getUserRides(Request $req)
    {
        $userRides = Ride::where('user_id', $req->id);
        return response()->json([
            'status'=>"sucsess",
            'userRides'=>$userRides
        ], 200);

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
