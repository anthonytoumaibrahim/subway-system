<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use Illuminate\Http\Request;
use App\Models\Facility;
use App\Models\Station;




class ManagerController extends Controller
{
    public function getStationInfo(Request $req){
    
        $id=$req->id;
        $station = Station::with(['facilities'])->find($id);
        if (!$station) {
            return response()->json([
                'error' => true,
                'message' => 'Station not found.'
            ], 404);
        }

        // $name = $station->name;
        // $opening = $station->opening;
        // $closing = $station->closing;
        // $status = $station->status;
        // $facilities= $station->facility->where;

        
        
        return response()->json([
            'success'=> true,
            'station'=> $station,
            

          
        ]);
    }
    public function updateStationInfo(Request $req){
        $id=$req->id;
        $station = Station::with('facilities:id,name')->find($id);

        $station->update([
            'opening' =>$req ->opening,
            'closing' =>$req->closing,
            'status'=>$req -> status
    
        ]);

        return response()->json([
            "message" => "updated successfully"
        ], 201);

    }
    

    public function createRide(Request $req){

        $station = Station::find($req->arrival_station_id);

        if (!$station) {
        return response()->json([
            'error' => true,
            'message' => 'Destination station not found.'
        ], 404);
        };
        $destination = $station->name;

        $ride = Ride::create([
            "departure_date" => $req -> departure_date,
            "arrival_date" => $req-> arrival_date,
            "price" => $req -> price,
            "destination"=> $req -> $destination

        ]);
        return response()->json([
            "message" => "created successfully"
        ], 201);

    }





    public function getRideInfo(Request $req){
        $ride = Ride::find($req->id);

        return response()->json([
            "message" => "found successfully",
            "ride" => $ride
        ], 200);



    }


    public function updateRideInfo(Request $req){

    }





}