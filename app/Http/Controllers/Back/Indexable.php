<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Services\Thumb;

use Illuminate\ {
    View\View,
    Support\Facades\Route
};

trait Indexable
{
    /**
     * The Repository instance.
     *
     * @var \App\Repositories\
     */
    protected $repository;

    /**
     * The table.
     *
     * @var string
     */
    protected $table;

    /**
     * Display a listing of the records.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $parameters = $this->getParameters ($request);
        // Get records and generate links for pagination
        // $records = $this->repository->getAll (config ("app.nbrPages.back.$this->table"), $parameters);
        $format = $request->format;
        $records = $this->repository->all($format);

        // $links = $records->appends ($parameters)->links ('back.pagination');

        // Ajax response
        if ($request->ajax()) {
          return response()->json([
            'data' => $records
          ]);
        }

    //    return view ('.".back.$this->table.index", [$this->table => $records]);
        
        return $this->renderOutput([$this->table => $records]);

    }

    /**
     * Get parameters.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
//     protected function getParameters($request)
//     {
//         // Default parameters
//         $parameters = config("parameters.$this->table");

//         // Build parameters with request
//         foreach ($parameters as $parameter => &$value) {
//             if (isset($request->$parameter)) {
//                 $value = $request->$parameter;
//             }
//         }

//         return $parameters;
//     }
}