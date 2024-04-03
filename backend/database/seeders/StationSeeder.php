<?php

namespace Database\Seeders;

use App\Models\Station;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Station::create([
            "name" => "Hazmiyeh Station",
            "image" => "https://unsplash.com/photos/qZ6if8WXl7E/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWV0cm98ZW58MHx8fHwxNzEyMDk0NDYyfDA&force=true&w=640",
            "status" => "active",
            "latitude" => 33.85529828408344,
            "longtitude" => 35.53719215453546,
            "manager_id" => 2
        ]);
    }
}
