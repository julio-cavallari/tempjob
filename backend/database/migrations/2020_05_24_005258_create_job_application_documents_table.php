<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobApplicationDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('job_application_documents', function (Blueprint $table) {
          $table->id();
          $table->bigInteger('job_application_id')->unsigned()->index();
          $table->bigInteger('document_id')->unsigned()->index();
          $table->bigInteger('user_id')->unsigned()->index();
          $table->string('path');
          $table->timestamps();
      });

      Schema::table('job_application_documents', function (Blueprint $table) {
          $table->foreign('job_application_id')->references('id')->on('job_applications')->onDelete('cascade');
          $table->foreign('document_id')->references('id')->on('documents')->onDelete('cascade');
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
        Schema::dropIfExists('job_application_documents');
    }
}
