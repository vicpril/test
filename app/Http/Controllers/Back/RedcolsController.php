<?php

namespace App\Http\Controllers\Back;

class RedcolsController extends AdminController
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Редколлегия и редсовет";

        $this->template = 'back.redcols.index';

        return $this->renderOutput();
    }

}
