<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\JobOpportunity;

class JobHistory extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', "job_opportunity_id"
    ];

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function jobOpportunity(){
      return $this->belongsTo('App\Models\JobOpportunity');
  }

    /**
     * Gets all histories from an user
     *
     * @param int $user_id user model id
     */
    public static function getAllHistories($user_id){
      return JobHistory::with(["jobOpportunity", "jobOpportunity.company"])
                        ->where('job_histories.user_id', $user_id)
                        ->get();
  }
}
