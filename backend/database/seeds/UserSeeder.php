<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Tags;
use App\Models\JobOpportunity;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){

        $users = [
            [
                "name" => "Julio Cavallari",
                "email" => "cesinha--jcf@hotmail.com",
                "state" => "SP",
                "city" => "Bauru",
                "password" => "123456",
            ],
            [
                "name" => "Julio Cavallari",
                "email" => "cesinha--jcf1@hotmail.com",
                "state" => "SP",
                "city" => "Bauru",
                "password" => "123456",
            ],
            [
                "name" => "Julio Cavallari",
                "email" => "cesinha--jcf2@hotmail.com",
                "state" => "SP",
                "city" => "Bauru",
                "password" => "123456",
            ],
        ];

        foreach ($users as $user) {
            $user["password"] = Hash::make($user["password"]);
            $created_user = User::create($user);
            Tags::create([
              "job_opportunity_id" => JobOpportunity::all()->random(1)->first()->id,
              "user_id" => $created_user->id
            ]);
        }
    }
}
