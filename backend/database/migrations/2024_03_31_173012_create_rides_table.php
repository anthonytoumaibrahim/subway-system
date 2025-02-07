<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create("rides", function (Blueprint $table) {
            $table->id();
            $table->dateTime("departure_date");
            $table->dateTime("arrival_date");
            $table->integer("price");
            $table->unsignedBigInteger("departure_station_id");
            $table->foreign("departure_station_id")->references("id")->on("stations")->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger("arrival_station_id");
            $table->foreign("arrival_station_id")->references("id")->on("stations")->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rides');
    }
};
