<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\Tags;

class JobOpportunity extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'company_id', 'description', 'workload', 'hiring_period', 'schooling',
    ];

    public function documents(){
        return $this->belongsToMany('App\Models\Document', 'job_opportunity_documents');
    }

    public function company(){
        return $this->belongsTo('App\Models\Company');
    }

    /**
     * Gets model with relationships models
     *
     * @param array $relationships relationships names configured in model
     * @param int $user_id user model id
     * @param int $id model id
     */
    public static function withRelationship($relantionships, $user_id = null, $id = null){
        if($id){
            return JobOpportunity::with($relantionships)->find($id);
        }
        $tags = Tags::with('job_opportunity')->where("user_id", $user_id)->get();
        $jobOpportunity = JobOpportunity::select('job_opportunities.*')
                             ->with($relantionships)
                             ->leftJoin('job_applications', 'job_opportunities.id', '=', 'job_applications.job_opportunity_id')
                             ->leftJoin('users', 'job_applications.user_id', '=', 'users.id')
                             ->whereNull('job_applications.user_id');
        $orderByRaw = "";
        $orderByRawIndex = 0;
        foreach ($tags as $value) {
          $orderByRawIndex++;
          $orderByRaw .= " WHEN '{$value->job_opportunity->name}' THEN {$orderByRawIndex} ";
        }
        if($orderByRawIndex > 0){
          $jobOpportunity->orderByRaw(" CASE job_opportunities.name".$orderByRaw."ELSE 5 END, job_opportunities.created_at");
        }


        return $jobOpportunity->get();
    }

    /**
     * Gets dropdown data
     *
     * @return array
     */
    public static function dropdown(){
      return JobOpportunity::select(DB::raw('min(id) as id, name'))->groupBy('name')->orderBy('name', 'asc')->get();
  }
}
