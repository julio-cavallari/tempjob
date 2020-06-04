<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobOpportunity;

class JobOpportunityController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['dropdown']]);
    }
     /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
      return response()->json(["jobOpportunities" => JobOpportunity::withRelationship(["company", "documents"], auth()->user()->id)], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        $jobOpportunity = JobOpportunity::create($request->all());

        return response()->json(["jobOpportunity" => $jobOpportunity, "message" => "Vaga criada com sucesso"], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request)
    {
        return response()->json(["jobOpportunity" => JobOpportunity::withRelationship(["company", "documents"], null, $request->route('id'))], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        $jobOpportunity = JobOpportunity::find($request->route('id'));

        $jobOpportunity->update($request->all());
        return response()->json(["jobOpportunity" => $jobOpportunity, "message" => "Vaga salva com sucesso"], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request)
    {
        $jobOpportunity = JobOpportunity::find($request->route('id'));
        $jobOpportunity->delete();
        return response()->json(["message" => "Vaga excluída com sucesso"], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function dropdown()
    {
      return response()->json(["dropdown" => JobOpportunity::dropdown()], 200);
    }
}
