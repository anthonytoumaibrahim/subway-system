<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use App\Models\Station;
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

}
