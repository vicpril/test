<?php

namespace Idea\Http\Controllers\Back;

use Illuminate\Http\Request;
use Idea\Http\Controllers\Controller;
use Idea\Models\User;

class AdminController extends Controller
{
    protected $user;

    protected $template;

    protected $content = FALSE;

    protected $title;

    protected $subtitle = FALSE;

    protected $vars;


    public function __construct() {
        // $this->middleware('permission:VIEW_ADMIN');

        $this->title = env('APP_NAME_RU');
    }

    public function renderOutput($vars = null) {

        $this->vars = array_add($this->vars, 'title', $this->title);
        
        $this->vars = array_add($this->vars, 'subtitle', $this->subtitle);

        $this->vars = ($vars) ? array_merge($this->vars,  $vars) : $this->vars;

        $sidebar = view(env('THEME_BACK').'.back.sidebar')->render();
        $this->vars = array_add($this->vars, 'sidebar', $sidebar);
//         $this->vars = array_merge($this->vars, compact('sidebar', $sidebar));
    
        
        $navbar = view(env('THEME_BACK').'.back.navbar')
                        ->with([
                            'subtitle'=>$this->subtitle
                            ])
                        ->render();
        $this->vars = array_add($this->vars, 'navbar', $navbar);

        $footer = view(env('THEME_BACK').'.back.footer')->render();
        $this->vars = array_add($this->vars, 'footer', $footer);
      
        $datatables = view(env('THEME_BACK').".back.dataTables");
        $this->vars = array_add($this->vars, 'datatables', $datatables);

        // if ($this->content) {
        //     $this->vars = array_add($this->vars, 'content', $this->content);
        // }

        return view($this->template)->with($this->vars);

    }
    
    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    // public function index()
    // {
    //     return view(env('THEME_BACK').'.back.index');
    // }

    public function logout()
    {
        auth()->loguot();
    }

    public function dashboard()
    {
        $this->subtitle = "Панель администратора";

        $this->template = env('THEME_BACK').'.back.index';

        return $this->renderOutput();
    }

}
