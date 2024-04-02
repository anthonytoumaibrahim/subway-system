<?php

namespace App\Http\Controllers;

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
}
