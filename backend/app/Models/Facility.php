<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;

    public $fillable = ["name"];

    public function station()
    {
        return $this->belongsTo(Station::class);
    }
}
