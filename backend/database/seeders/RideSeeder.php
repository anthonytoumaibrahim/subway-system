<?php

namespace Database\Seeders;

use App\Models\Ride;
use GuzzleHttp\Promise\Create;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RideSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ride::create([
            "departure_date" => "2024-4-6 18:00",
            "arrival_date" => "2024-4-6 19:00",
            "price" => 45,
            "departure_station_id" => 1,
            "arrival_station_id" => 2

        ]);

        Ride::create([
            "departure_date" => "2024-3-5 18:00",
            "arrival_date" => "2024-3-5 19:00",
            "price" => 45,
            "departure_station_id" => 2,
            "arrival_station_id" => 3

        ]);

        Ride::create([
            "departure_date" => "2024-4-4 17:00",
            "arrival_date" => "2024-4-4 18:00",
            "price" => 45,
            "departure_station_id" => 1,
            "arrival_station_id" => 2

        ]);

        Ride::create([
            "departure_date" => "2024-4-4 19:00",
            "arrival_date" => "2024-4-4 20:00",
            "price" => 45,
            "departure_station_id" => 1,
            "arrival_station_id" => 3

        ]);
    }
}
