<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'job_opportunity_id', 'user_id',
    ];

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function job_opportunity(){
      return $this->belongsTo('App\Models\JobOpportunity');
    }
}
