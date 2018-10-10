<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserJobTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_job', function (Blueprint $table) {
            $table->increments('id');

            // create foreign key
            $table->integer('user_id')->unsigned()->default(1);
            $table->foreign('user_id')->references('id')->on('users')
                            ->onDelete('cascade')
                            ->onUpdate('cascade')
                            ;

            $table->integer('job_id')->unsigned()->default(1);
            $table->foreign('job_id')->references('id')->on('jobs')
                            ->onDelete('cascade')
                            ->onUpdate('cascade')
                            ;

            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_job', function(Blueprint $table) {
            $table->dropForeign('user_job_user_id_foreign');
            $table->dropForeign('user_job_job_id_foreign');
        });

        Schema::dropIfExists('user_job');
    }
}
