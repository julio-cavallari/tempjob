<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobOpportunityDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('job_opportunity_documents', function (Blueprint $table) {
          $table->id();
          $table->bigInteger('job_opportunity_id')->nullable()->unsigned()->index();
          $table->bigInteger('document_id')->nullable()->unsigned()->index();
          $table->timestamps();
      });

      Schema::table('job_opportunity_documents', function (Blueprint $table) {
          $table->foreign('job_opportunity_id')->references('id')->on('job_opportunities')->onDelete('cascade');
          $table->foreign('document_id')->references('id')->on('documents')->onDelete('cascade');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_opportunities_documents');
    }
}
