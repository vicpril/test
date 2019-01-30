<?php 

namespace Idea\Repositories;

use Idea\Models\File;

class FilesRepository extends Repository{

	public function __construct(File $file) {
      $this->model = $file;
   }


   public function create($data)
   {
      $file = $data['file'];
      unset($data['file']);
      $data['url'] = date("Y/m") ."/" . $file->getClientOriginalName();

      $file->storeAs('files', $data['url']);
      
      try {
         $result = $this->model->firstOrCreate(['url' => $data['url']]);
      } catch (Exception $e) {
         return ['error' => $e->getMessage()];
      }

      return [
        'status' => 'success',
        'message' => 'Файл успешно добавлен',
        'result' => $result,
      ];

   }
	
// 		public function update($request, $id)
// 		 {
// 				$data = $request->except(['_token', 'id']);
// 				$record = $this->model->find($id);
				
// 				try {
// 					 $record->update($data);
// 				} catch (Exception $e) {
// 					 return ['error' => $e->getMessage()];
// 				}

// 				return [
// 					'status' => 'success',
// 					'message' => "Организация <b>$record->title_ru</b> успешно обновлена"
// 				];

// 		 }
	
		public function delete($id)
		 {
				$this->model->find($id)->delete();
			
				return [
					'status' => 'success',
					'message' =>  "Файл удален"
				];

		 }

}

?>
  