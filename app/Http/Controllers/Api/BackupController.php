<?php

namespace App\Http\Controllers\Api;

use DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\BackupListResource;

class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dumps = Storage::disk('backup')->files();
        
        $dumps = collect($dumps)->map(function($title) {
              return [
                'title' => $title,
                'created_at' => date('Y-m-d H:i:s', Storage::disk('backup')->lastModified($title)),
                'size' => Storage::disk('backup')->size($title),
                'download_link' => route('backup_download', ['title'=>$title]),
            ];
        });
//         dd($dumps);
      return response()->json(
        [
        'status' => 'success',
        'data' => $dumps
      ]);
          
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $file = Storage::disk('backup')->path('') . 'ideaidealy_'. date('Y_m_d_His', time()) . '.sql';
        $db = env("DB_DATABASE");
        $user = env('DB_USERNAME');
        $pass = env('DB_PASSWORD');
      
//       dd($user);
      
        $return_var = NULL;
        $output = NULL;
        $command = "mysqldump -u $user -p$pass $db > $file";
        exec($command, $output, $return_var);

      
        return response()->json(
        [
          '_st' => $return_var,
          'status' => ($return_var == 0) ? 'success' : 'error',
          'output' => $output,
          'message' => ($return_var == 0) ? 'Резервная копия успешно создана' : 'Что-то пошло не так...'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($title)
    {
      Storage::disk('backup')->delete($title);
        
//         dd($dumps);
      return response()->json(
        [
          'status' => 'success',
          'message' => 'Резервная копия удалена'
        ]);
    }
  
    
}
