<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'logo',
    ];

    public function jobOpportunity(){
        return $this->hasMany('App\Models\JobOpportunity');
    }
}
