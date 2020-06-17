<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\Tags;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['store']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(["users" => User::get()], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\UserRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(UserRequest $request)
    {

      $inputs = User::sanitize($request->except('password', 'confirm_password', 'tags', 'avatar'));

      $user = User::create(array_merge(
          $inputs,
          ['password' => Hash::make($request->input('password'))]
      ));
      if($user){
        if($request->input("avatar")){
          $nameFile = null;
          $name = uniqid(date('HisYmd'));
          $nameFile = "{$user->id}_{$name}_d.jpeg";
          $image = $request->input("avatar");
          $image = str_replace('data:image/png;base64,', '', $image);
          $image = str_replace(' ', '+', $image);
          $upload = \Illuminate\Support\Facades\Storage::disk('public')->put("avatar/".$nameFile, base64_decode($image));
        }
        foreach ($request->input('tags') as $value) {
          Tags::create([
            "job_opportunity_id" => $value["id"],
            "user_id" => $user->id
          ]);
        }
      }
      return response()->json(["user" => User::with(["tags", "tags.job_opportunity"])->find($user->id), "message" => "Usuário criado com sucesso"], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request)
    {
        return response()->json(["user" => User::with(["tags", "tags.job_opportunity"])->find($request->route('id'))], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\UserRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UserRequest $request)
    {
        $user = User::with(["tags", "tags.job_opportunity"])->find($request->route('id'));

        $inputs = User::sanitize($request->except('password', 'confirm_password'));
        $user->update(array_merge(
            $inputs,
            ['password' => Hash::make($request->input('password'))]
        ));
        $userTags = Tags::where('user_id', $request->route('id'));
        $userTags->delete();
        foreach ($request->input('tags') as $value) {
          Tags::create([
            "job_opportunity_id" => $value["id"],
            "user_id" => $request->route('id')
          ]);
        }
        return response()->json(["user" => User::with(["tags", "tags.job_opportunity"])->find($request->route('id')), "message" => "Usuário salvo com sucesso"], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateAvatar(Request $request)
    {
        $nameFile = null;
        $user = auth()->user();
        $name = uniqid(date('HisYmd'));
        $nameFile = "{$user->id}_{$name}_d.jpeg";
        $image = $request->input("avatar");
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        if($upload = \Illuminate\Support\Facades\Storage::disk('public')->put("avatar/".$nameFile, base64_decode($image))){
          $user = User::with(["tags", "tags.job_opportunity"])->find($user->id);
          $user->avatar = $nameFile;
          $user->save();
          return response()->json(["user" => $user, "message" => "Imagem alterada com sucesso"], 201);
        }else{
          return response()->json(["user" => $user, "message" => "Erro ao salvar imagem em nossos servidores"], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request)
    {
        $user = User::find($request->route('id'));
        $user->delete();
        return response()->json(["message" => "Usuário excluído com sucesso"], 200);
    }
}
