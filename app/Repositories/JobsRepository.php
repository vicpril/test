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

      return [
			'status' => 'success',
			'message' => 'Организация успешно добавлена'
		];

   }
	
		public function update($request, $id)
		 {
				$data = $request->except(['_token', 'id']);
				$record = $this->model->find($id);
				
				try {
					 $record->update($data);
				} catch (Exception $e) {
					 return ['error' => $e->getMessage()];
				}

				return [
					'status' => 'success',
					'message' => "Организация <b>$record->title_ru</b> успешно обновлена"
				];

		 }
	
		public function delete($id)
		 {
				
				$this->model->find($id)->delete();
			
				return [
					'status' => 'success',
					'message' =>  "Организация удалена"
				];

		 }

}

?>
  