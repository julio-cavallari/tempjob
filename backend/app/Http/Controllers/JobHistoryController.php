<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobHistory;
use App\Models\JobOpportunity;

class JobHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
      return response()->json(["jobHistories" => JobHistory::getAllHistories(auth()->user()->id)], 200);
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
      if(JobHistory::where("job_opportunity_id", $request->route("job_opportunity_id"))
                       ->where("user_id", auth()->user()->id)->count() === 0){
        $jobHistory = JobHistory::create([
          "job_opportunity_id" => $request->route("job_opportunity_id"),
          "user_id" => auth()->user()->id
        ]);

        return response()->json(["jobHistory" => $jobHistory, "message" => "Entrada cadastrada com sucesso"], 201);
      }else{
        return response()->json(["error" => "Não é possível criar 2 históricos para a mesma vaga e profissional"], 200);
      }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
