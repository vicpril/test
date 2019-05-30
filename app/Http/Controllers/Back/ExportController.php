<?php

namespace App\Http\Controllers\Back;

use File;
use Route;
use Illuminate\Http\Request;
use App\Http\Requests\ExportRequest;
use App\Http\Controllers\Controller;
// use App\Repositories\ExportRepository;
use App\Repositories\Export\ExportRepositoryInterface;

class ExportController extends Controller
{
    protected $repository;

    public function __construct(ExportRepositoryInterface $rep)
    {
        $this->repository = $rep;
    }

    public function index(ExportRequest $request)
    {
        ## for test
//             $this->repository->test();
        ##
      
        $this->repository->initiate(
                                    Route::current()->parameter('action'), 
                                    $request->except('_token')
                                   )
//           ->test();
                         ->contentPrepare()
                         ->createFile()
                         ->downloadFile();
    }

    

}
