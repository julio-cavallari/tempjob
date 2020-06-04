<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobApplicationDocument;
use App\Models\JobApplication;

class JobApplicationDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $documents = JobApplicationDocument::getAllUserDocuments(auth()->user()->id);
      return response()->json(["documents" => $documents], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
      $nameFile = null;
      $user = auth()->user();
      $name = uniqid(date('HisYmd'));
      $nameFile = "{$user->id}_{$name}_d.jpeg";
      $image = $request->input("document");
      $image = str_replace('data:image/png;base64,', '', $image);
      $image = str_replace(' ', '+', $image);
      $upload = \Illuminate\Support\Facades\Storage::disk('public')->put("documents/".$nameFile, base64_decode($image));
      if (!$upload){
        return response()->json(["error" => "Erro ao fazer upload do documento"], 400);
      }
      $jobApplication = JobApplication::where("job_opportunity_id", $request->input("job_opportunity_id"))->where("user_id", $user->id)->first();
      JobApplicationDocument::create([
        "job_application_id" => $jobApplication->id,
        "document_id" => $request->input("document_id"),
        "user_id" => $user->id,
        "path" => "/documents/{$nameFile}",
      ]);
      $documents = JobApplicationDocument::getAllUserDocuments($user->id);
      return response()->json(["documents" => $documents], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
      return response()->json(["document" => JobApplicationDocument::find($request->route("id"))], 200);
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
