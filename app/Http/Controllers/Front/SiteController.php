<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\MenusRepository;

use Menu;
use App\Models\Page;


class SiteController extends Controller
{
    //
    // для хранения логики (объекта класса) по работе с articles
    protected $a_rep;
    // ... menus
    protected $m_rep;
    // ... sidebar menus
    protected $s_rep;
    // ... issues
    protected $i_rep;
    // ... categories
    protected $c_rep;
    // ... users
    protected $u_rep;
    // ... tags
    protected $t_rep;

    protected $keywords;
    protected $meta_desc;
    protected $title;

    // шаблон (макет) отображения
    protected $template;
    // переменные для шаблона
    protected $vars = array();
    //указание на отображение меню
    protected $show_top_menu = true;
    protected $show_sidebar_menu = false;
    protected $show_review_menu = false;
    protected $show_stol = false;
    

    public function __construct(MenusRepository $m_rep) {
    	$this->m_rep = $m_rep;

    }

    protected function renderOutput() {
        // TOP MENU
        if($this->show_top_menu) {
            $menu_top = $this->m_rep->getMenu('top', app()->getLocale());
            $menu = view('front.components.navigation')->with('menu', $menu_top)->render();
            $this->vars = array_add($this->vars, 'navigation', $menu);
        } else {
            $this->vars = array_add($this->vars, 'navigation', "");
        }
      
        // SIDEBAR MENU
        if($this->show_sidebar_menu) {
            $menu_sidebar = $this->m_rep->getMenu('sidebar', app()->getLocale());
//             dd($menu_sidebar);
            $menu = view('front.components.sidebar_menu')->with('menu', $menu_sidebar)->render();
            $this->vars = array_add($this->vars, 'sidebar_menu', $menu);
        } else {
            $this->vars = array_add($this->vars, 'sidebar_menu', "");
        }
      
        // REVIEW MENU
        if($this->show_review_menu) {
            $menu_review = $this->m_rep->getMenu('review', app()->getLocale());
            $menu = view('front.components.review_menu')->with('menu', $menu_review)->render();
            $this->vars = array_add($this->vars, 'review_menu', $menu);
        } else {
            $this->vars = array_add($this->vars, 'review_menu', "");
        }
      

        if (auth()->check()) {
            dump(auth()->user()->loc->full_name . ' - '. auth()->user()->role);
            dump(auth()->user()->loc->short_name . ' - '. auth()->user()->role);

        }

    	return view($this->template)->with($this->vars);
    }

}
