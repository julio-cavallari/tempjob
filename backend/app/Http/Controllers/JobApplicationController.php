<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobApplication;
use App\Models\JobOpportunity;

class JobApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
      $jobApplication = JobApplication::select(
        'job_applications.id',
        'job_applications.job_opportunity_id',
        'companies.name as company_name',
        'companies.logo as company_logo',
        'job_opportunities.name as job_opportunity_name',
        'job_opportunities.created_at as job_opportunity_created_at')
      ->leftJoin('job_opportunities', 'job_applications.job_opportunity_id', '=', 'job_opportunities.id')
      ->leftJoin('companies', 'job_opportunities.company_id', '=', 'companies.id')
      ->where("user_id", auth()->user()->id)
      ->orderBy('job_applications.updated_at', 'desc')
      ->get();
      return response()->json(["jobApplications" => $jobApplication], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
      $jobOpportunity = JobOpportunity::find($request->route("job_opportunity_id"));
      if(JobApplication::where("job_opportunity_id", $request->route("job_opportunity_id"))
                       ->where("user_id", auth()->user()->id)->count() === 0){
        $jobApplication = JobApplication::create([
          "job_opportunity_id" => $request->route("job_opportunity_id"),
          "user_id" => auth()->user()->id
        ]);

        return response()->json(["jobApplication" => $jobApplication, "message" => "Parabéns, você se candidatou à vaga ".$jobOpportunity->name], 201);
      }else{
        return response()->json(["error" => "Você já se possui uma candidatura ativa à vaga ".$jobOpportunity->name], 200);
      }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request)
    {
      $jobApplication = JobApplication::where("job_opportunity_id", $request->route('id'))->where("user_id", auth()->user()->id)->first();
      $jobApplication->delete();

      $jobApplications = JobApplication::select(
        'job_applications.id',
        'job_applications.job_opportunity_id',
        'companies.name as company_name',
        'companies.logo as company_logo',
        'job_opportunities.name as job_opportunity_name',
        'job_opportunities.created_at as job_opportunity_created_at')
      ->leftJoin('job_opportunities', 'job_applications.job_opportunity_id', '=', 'job_opportunities.id')
      ->leftJoin('companies', 'job_opportunities.company_id', '=', 'companies.id')
      ->where("user_id", auth()->user()->id)
      ->orderBy('job_applications.updated_at', 'desc')
      ->get();
      return response()->json(["jobApplications" => $jobApplications, "message" => "Cadidatura cancelada com sucesso"], 200);
    }
}
