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
            "latitude" => 33.85348976858829,
            "longtitude" => 35.53530658599391,
            "manager_id" => 2
        ]);

        Station::create([
            "name" => "Saida Station",
            "image" => "https://unsplash.com/photos/qZ6if8WXl7E/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWV0cm98ZW58MHx8fHwxNzEyMDk0NDYyfDA&force=true&w=640",
            "status" => "active",
            "latitude" => 33.53605299910613,
            "longtitude" => 35.37210393855756,
            "manager_id" => 2
        ]);

        Station::create([
            "name" => "Tyre Station",
            "image" => "https://unsplash.com/photos/qZ6if8WXl7E/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWV0cm98ZW58MHx8fHwxNzEyMDk0NDYyfDA&force=true&w=640",
            "status" => "active",
            "longtitude" => 35.2100835053628,
            "latitude" => 33.26608751357015,
            "manager_id" => 2
        ]);
    }
}
