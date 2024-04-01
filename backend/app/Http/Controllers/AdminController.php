<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use App\Models\Station;
use App\Models\User;
use Illuminate\Http\Request;

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
}
