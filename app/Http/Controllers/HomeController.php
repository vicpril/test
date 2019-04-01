<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
  
    public function uploadFile(){
        return view('uploadfile');
    }
  
  /** Example of File Upload */
    public function uploadFilePost(Request $request){
        $request->validate([
            'fileToUpload' => 'required|file|max:1024',
        ]);

        $request->fileToUpload->store('logos');

        return back()
            ->with('success','You have successfully upload image.');

    }
}
