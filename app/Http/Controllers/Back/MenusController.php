<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MenusController extends AdminController
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Меню";

        $this->template = env('THEME_BACK') . '.back.menus.index';
      
        return $this->renderOutput();
    }
}
