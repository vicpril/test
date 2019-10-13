<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    protected $user;

    protected $template;

    protected $content = false;

    protected $title;

    protected $subtitle = false;

    protected $vars;

    public function __construct()
    {

        $this->title = env('APP_NAME_RU');

    }

    public function renderOutput($vars = null)
    {

        $this->vars = array_add($this->vars, 'title', $this->title);

        $this->vars = array_add($this->vars, 'subtitle', $this->subtitle);

        $this->vars = ($vars) ? array_merge($this->vars, $vars) : $this->vars;

        $sidebar = view('back.sidebar')->render();
        $this->vars = array_add($this->vars, 'sidebar', $sidebar);

        $navbar = view('back.navbar')
            ->with([
                'subtitle' => $this->subtitle,
            ])
            ->render();
        $this->vars = array_add($this->vars, 'navbar', $navbar);

        $footer = view('back.footer')->render();
        $this->vars = array_add($this->vars, 'footer', $footer);

        return view($this->template)->with($this->vars);

    }

    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function dashboard()
    {
        $this->subtitle = "Панель администратора";

        $this->template = 'back.index';

        return $this->renderOutput();
    }

    public function logout()
    {
        auth()->loguot();
    }
}
