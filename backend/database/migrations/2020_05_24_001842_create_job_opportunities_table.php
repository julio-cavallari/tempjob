<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobOpportunitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('job_opportunities', function (Blueprint $table) {
          $table->id();
          $table->string('name');
          $table->bigInteger('company_id')->unsigned()->index();
          $table->text('description')->nullable();
          $table->string('workload')->nullable();
          $table->string('hiring_period')->nullable();
          $table->string('schooling')->nullable();
          $table->timestamps();
      });

      Schema::table('job_opportunities', function (Blueprint $table) {
          $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_opportunities');
    }
}
