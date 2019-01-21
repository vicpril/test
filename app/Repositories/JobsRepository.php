<?php 

namespace Idea\Repositories;

// use Idea\Repositories\Repository;
use Idea\Models\Job;

class JobsRepository extends Repository{

	public function __construct(Job $job) {
      $this->model = $job;
   }


   public function create($params)
   {
      if( $this->model->save($params) ) {
         return true;
      }

      return false;

   }

}

?>
  