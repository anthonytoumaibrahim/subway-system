<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    use HasFactory;

    protected $fillable = [
        "departure_date",
        "arrival_date",
        "price",
        "departure_station_id",
        "arrival_station_id"
    ];

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function departureStation()
    {
        return $this->belongsTo(station::class, "departure_station_id");
    }

    public function arrivalStation()
    {
        return $this->belongsTo(station::class, "arrival_station_id");
    }
    
}
