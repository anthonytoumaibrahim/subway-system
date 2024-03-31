<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;
    public function station()
    {
        //  return $this->hasMany(Station::class);
    }
    public function user()
    {
        return $this->hasMany(User::class);
    }

}
