<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    public function jobApplication(){
        return $this->hasMany('App\Models\JobApplication', 'job_application_documents');
    }

    public function jobOpportunity(){
        return $this->hasMany('App\Models\JobOpportunity', 'job_opportunity_documents');
    }
}
