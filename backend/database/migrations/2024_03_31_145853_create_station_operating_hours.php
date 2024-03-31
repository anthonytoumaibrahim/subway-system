<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('station_operating_hours', function (Blueprint $table) {
            $table->id();
            $table->time("opening");
            $table->time("closing");
            $table->unsignedBigInteger("station_id");
            $table->foreign("station_id")->references('id')->on('stations');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('station_operating_hours');
    }
};
