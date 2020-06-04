<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'job_opportunity_id', 'user_id',
    ];

    public function documents(){
        return $this->belongsToMany('App\Models\Document', 'job_application_documents');
    }

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function job_opportunity(){
      return $this->belongsTo('App\Models\JobOpportunity');
    }
}
