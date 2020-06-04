<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('job_histories', function (Blueprint $table) {
          $table->id();
          $table->bigInteger('job_opportunity_id')->unsigned()->index();
          $table->bigInteger('user_id')->unsigned()->index();
          $table->timestamps();
      });

      Schema::table('job_histories', function (Blueprint $table) {
          $table->foreign('job_opportunity_id')->references('id')->on('job_opportunities')->onDelete('cascade');
          $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_histories');
    }
}
