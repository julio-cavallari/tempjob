<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobOpportunityDocument extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'job_opportunity_id',
        'document_id',
    ];
}
