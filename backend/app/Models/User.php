<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'cpf', 'birthday', 'phone', 'state', 'city', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    public function jobApplication(){
        return $this->hasMany('App\Models\JobApplication');
    }

    public function jobHistory(){
        return $this->hasMany('App\Models\JobHistory');
    }

    public function tags(){
        return $this->hasMany('App\Models\Tags');
    }


    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Return sanitized input's value
     *
     * @param  array $inputs
     * @return array
     */
    public static function sanitize($inputs){

      foreach ($inputs as $key => $value) {
        if(is_string($value)){
          $inputs[$key] = trim($value);
        }
        if($key === 'name' && strlen($value) < 0){
          $inputs[$key] = ucwords($value);
        }
        if($key === 'email' && strlen($value) < 0){
          $inputs[$key] = mb_strtolower($value);
        }
        if($key === 'cpf' || $key === 'phone' || $key === 'birthday' && strlen($value) < 0){
          $inputs[$key] = preg_replace('/\W/i', '', $value);
        }
      }

      return $inputs;
    }
}
