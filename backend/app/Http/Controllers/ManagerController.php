<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facility;
use App\Models\Station;




class ManagerController extends Controller
{
    public function getStationInfo(Request $req){
    
        $id=$req->id;
        $station = Station::with('Facilities:id,name')->find($id);
        if (!$station) {
            return response()->json([
                'error' => true,
                'message' => 'Station not found.'
            ], 404);
        }

        $name = $station->name;
        $opening = $station->opening;
        $closing = $station->closing;
        $status = $station->status;

     

        return response()->json([
            'success'=> true,
            'station'=> $station
          
        ]);
    }
    public function updateStationInfo(Request $req){


        
    }




}