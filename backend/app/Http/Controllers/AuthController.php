<?php

namespace App\Http\Controllers;
use App\Models\User;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        if (!$token = auth()->setTTL((3600 * 24) * 7)->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return response()->json(["user" => User::with(["tags", "tags.job_opportunity"])->where("email", $credentials["email"])->first(), "token" => $token, 'expires_in' => auth()->factory()->getTTL()], 200);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->noContent();
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
      $token = $this->respondWithToken(auth()->setTTL((3600 * 24) * 7)->refresh())->access_token;
      return response()->json(["user" => User::with(["tags", "tags.job_opportunity"])->find(auth()->user()->id), "token" => $token,  'expires_in' => auth()->factory()->getTTL()], 200);
    }

    /**
     * Get time to life of a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTTL()
    {
      return response()->json(['expires_in' => auth()->getTTL()], 200);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return (object)[
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
    }
}
