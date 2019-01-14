<?php

namespace Idea\Http\Controllers\Back;

use Illuminate\Http\Request;
use Idea\Http\Controllers\Controller;


class AdminController extends Controller
{
    //
    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $pannels = [];

        // foreach (config('pannels') as $pannel) {

        //     $panelAdmin = new PannelAdmin($pannel);

        //     if ($panelAdmin->nbr) {
        //         $pannels[] = $panelAdmin;
        //     }
        // }
        
        return view(env('THEME_BACK').'.back.index', compact('pannels'));
    }

    public function logout()
    {
        auth()->loguot();
    }

}
