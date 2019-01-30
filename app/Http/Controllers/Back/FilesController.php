<?php

namespace Idea\Http\Controllers\Back;

use Idea\Http\Requests\FileRequest;
use Idea\Http\Controllers\Controller;
use Idea\Repositories\FilesRepository;

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
        $result = $this->repository->create($request);

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
        //
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
        //
    }
}
