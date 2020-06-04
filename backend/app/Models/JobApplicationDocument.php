<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobApplicationDocument extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'job_application_id',
        'document_id',
        'user_id',
        'path'
    ];

     /**
     * Gets all documents from user
     *
     * @param int $user_id user model id
     */
    public static function getAllUserDocuments($user_id){
      return JobApplicationDocument::select(
        "job_application_documents.id",
        "job_application_documents.document_id",
        "job_application_documents.path",
        "job_opportunities.id as job_opportunity_id"
      )
      ->where("job_application_documents.path", "like", "/documents"."/".$user_id."%")
      ->leftJoin('job_applications', 'job_application_documents.job_application_id', '=', 'job_applications.id')
      ->leftJoin('job_opportunities', 'job_applications.job_opportunity_id', '=', 'job_opportunities.id')
      ->get();
  }
}
