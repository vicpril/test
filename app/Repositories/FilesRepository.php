<?php 

namespace Idea\Repositories;

use Idea\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesRepository extends Repository{

	public function __construct(File $file) {
      $this->model = $file;
   }

	 public function all($format = null) {
		$result = $this->model->all();

		$records = array();
		switch ($format) {
			case 'select2':
				$grouped = $result->each(function($file)use(&$records){
					$tmp = explode('/', $file->url);
					if ($tmp[0] == 'files') {
						$groupText = "Документы " . date("M Y", mktime(0, 0, 0, $tmp[2], 1, $tmp[1]));
						$child = [
											'id' => $file->id,
											// 'text' => view(env('THEME_BACK').'.back.files.file_row')
											// 								->with('year', $tmp[2])
											// 								->with('month', $tmp[1])
											// 								->with('title', $file->title)
											// 								->render(),
											'file' => [
												'year' => $tmp[2],
												'month' => $tmp[1],
												'title' => $file->title
											]
										];
						$records[$groupText]['text'] = $groupText;
						$records[$groupText]['children'][] = $child;

					} elseif ($tmp[0] == 'avatars'){
						$groupText = "Фотографии";
						$child = [
											'id' => $file->id,
											// 'text' => view(env('THEME_BACK').'.back.files.file_row')
											// 								->with('year', $file->created_at->format('Y'))
											// 								->with('month', $file->created_at->format('M'))
											// 								->with('title', $file->title)
											// 								->render(),
											'file' => [
												'year' => $file->created_at->format('Y'),
												'month' => $file->created_at->format('M'),
												'title' => $file->title
											]
										];
						$records[$groupText]['text'] = $groupText;
						$records[$groupText]['children'][] = $child;
					}
				});
				return [
								"results" => array_values($records),
							];
				break;
				default:
							return $result;
				break;
		}
		
		
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
	
		public function update($data, $id)
		 {
				$record = $this->model->find($id);
				
				try {
					$record->update($data);
				} catch (Exception $e) {
					 return ['error' => $e->getMessage()];
				}

				return [
					'status' => 'success',
					'message' => "Название файла обновлено",
					'result' => $record,
				];

		 }
	
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
  