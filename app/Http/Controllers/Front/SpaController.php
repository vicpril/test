<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    //
  
    public function index() 
    {
      return view('spa');
    }
}
