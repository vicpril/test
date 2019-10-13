<?php

namespace App\Http\Controllers\Back;

class CategoriesController extends AdminController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Рубрики";

        $this->template = 'back.categories.index';

        return $this->renderOutput();
    }
}
