<?php 

namespace Idea\Repositories;

// use Idea\Repositories\Repository;
use Idea\Models\Job;

class JobsRepository extends Repository{

	public function __construct(Job $job) {
      $this->model = $job;
   }


   public function create($request)
   {
      $data = $request->except('_token');

      try {
         $this->model->create($data);
      } catch (Exception $e) {
         return ['error' => $e->getMessage()];
      }

      return ['success' => 'Организация успешно добавлена'];

   }

}

?>
  