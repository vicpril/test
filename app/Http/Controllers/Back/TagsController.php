<?php

namespace App\Http\Controllers\Back;

use App\Tags;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TagsController extends AdminController
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Метки";

        $this->template = 'back.tags.index';
      
        return $this->renderOutput();
    }
}
