<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facility;
use App\Models\Station;




class ManagerController extends Controller
{
    public function getStationInfo(Request $req){
    
    {
        $station = Station::where('name', $name)->first();

        if (!$station) {
            return response()->json([
                'error' => true,
                'message' => 'Station not found.'
            ], 404);
        }

        
        $opening = $station->opening;
        $closing = $station->closing;

        $status = $station->status;
        $facilityName = Facility::find($station->id)->name;

        return response()->json([
            'station_name' => $name,
            'opening' => $opening,
            'closing' => $closing,
            'status' => $status,
            'facility_name' => $facilityName
        ]);
    }}
}