<?php

namespace Idea\Http\Controllers\Back;

use Illuminate\Support\Facades\Storage;
use Idea\Http\Requests\FileRequest;
use Idea\Http\Controllers\Controller;
use Idea\Repositories\FilesRepository;
use Idea\Models\File;

class FilesController extends AdminController
{
    use Indexable;
  
    public function __construct(FilesRepository $f_rep) {
        parent::__construct();
        
        $this->subtitle = 'Файлы';

        $this->template = env('THEME_BACK').'.back.files.index';
      
        $this->table = 'files';
      
        $this->repository = $f_rep;
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
//     public function index()
//     {
//         //
//     }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FileRequest $request)
    {
        $result = $this->repository->create($request->file, $request->type, $request->title);

        if ($request->ajax()) {
            $file = $result['result'];
            $result['id'] = $file->id;
            $result['row'] = view(env('THEME_BACK').'.back.files.table_row')->with('file', $file)->render();
            return response()->json($result);
        }
            
        return redirect(route('files.index'))->with($result['status'], $result['message']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
        if (request()->ajax()) {

            $record = $this->repository->find($id);
            dd([
                'data' => array_merge([$record, 'file' => Storage::get($record->url)])
            ]);
            if ($record && Storage::disk('public')->exists($record->url)) {
                return response()->json([
                    'data' => array_merge($record, ['file' => Storage::get($record->url)])
                ]);
            }

            return 'ajax - true, edit - false';

            
        }
        return 'ajax false';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->authorize('delete', File::class);
      
        $result = $this->repository->delete($id);
      
        if (request()->ajax()) {
            return response()->json($result);
        }
            
        return redirect('/admin/files')->with($result);
    }
}
