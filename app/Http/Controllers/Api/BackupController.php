<?php

namespace App\Http\Controllers\Api;

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
                'download_link' => '',
                'delete_link' => '',
            ];
        });
//         dd($dumps);
      return response()->json($dumps);
          
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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
