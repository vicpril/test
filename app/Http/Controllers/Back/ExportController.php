<?php

namespace App\Http\Controllers\Back;

use File;
use Route;
use Blade;
use Illuminate\Http\Request;
use App\Http\Requests\ExportRequest;
use App\Http\Controllers\Controller;
use App\Repositories\ExportRepository;

class ExportController extends Controller
{
    protected $repository;
    protected $action;
//     protected $path;
    

    public function __construct(ExportRepository $e_rep)
    {
        $this->repository = $e_rep;

        $this->action = Route::current()->parameter('action');

    }

    public function index(ExportRequest $request)
    {
        $this->repository->exportFile($this->action, $request->except('_token'))
                         ->createFile()
                         ->downloadFile();
    }

    

}
