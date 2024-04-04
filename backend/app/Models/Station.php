<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    use HasFactory;

    protected $fillable = [
        "name", "image", "status", "longtitude", "latitude", "opening", "closing", "manager_id"
    ];

    public function manager()
    {
        return $this->hasOne(User::class, 'id', 'manager_id');
    }

    public function facilities()
    {
        return $this->hasMany(Facility::class);
    }
}
