<?php

namespace App\Http\Controllers\Back;

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

        $this->template = 'back.menus.index';

        return $this->renderOutput();
    }
}
