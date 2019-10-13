<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Back\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BackupController extends AdminController
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $this->subtitle = "Резервирование базы данных";

        $this->template = 'back.backup.index';

        return $this->renderOutput();
    }

    public function download($title)
    {
        return Storage::disk('backup')->download($title);
    }
}
