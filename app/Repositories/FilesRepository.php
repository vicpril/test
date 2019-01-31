<?php 

namespace Idea\Repositories;

use Idea\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesRepository extends Repository{

	public function __construct(File $file) {
      $this->model = $file;
   }


   public function create($file, $type, $title = null)
   {
			$path = ($type == 'files') ? date("Y/m") . "/" : ""; 
			$path .= $file->getClientOriginalName();

			$title = ($title)? $title : $file->getClientOriginalName();
			
      if ($file->storeAs($type, $path)) {
					try {
						$record = $this->model->firstOrCreate(['url' => implode("/", [$type,$path])], ['title' => $title]);
						$record->touch();
					} catch (Exception $e) {
						 return ['status' => 'error',
										 'message' => $e->getMessage()];
					}
			};
      
      return [
        'status' => 'success',
        'message' => 'Файл успешно добавлен',
        'result' => $record,
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
				$file = $this->model->find($id);
				if (Storage::disk('public')->exists($file->url)) {

					if ( Storage::delete($file->url) ) {
						$this->model->find($id)->delete();
						return [
							'status' => 'success',
							'message' =>  "Файл удален"
						];
					}

				} else {
					$this->model->find($id)->delete();
					return [
						'status' => 'success',
						'message' =>  "Ссылка на файл удалена"
					];
				}

			
				return [
						'status' => 'error',
						'message' =>  "Что-то пошло не так"
					];
			
		 }

}

?>
  