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
        // dd($request->file('file'));
        
        $result = $this->repository->create($request->except('_token'));
        // dd($result);
        if ($request->ajax()) {
            $file = $result['result'];
            $result['row'] = "
                    <tr>
                      <td>{{ $file->id }}</td>
                      <td>{{ $file->title }}</td>
                      <td>{{ $file->url }}</td>
                      <td>{{ $file->created_at }}</td>
                      <td>{{ $file->updated_at }}</td>
                    </tr>
            ";
            return response()->json($result);
        }
            
        // if ( is_array($result) && !empty($result['error']) ) {
        //     return back()->with($result);
        // }

        // return redirect('/admin/jobs')->with($result);
        return false;
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
