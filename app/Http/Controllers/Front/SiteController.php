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
    //указание на использования сайдбрара
    // protected $bar = 'no';
    // protected $contentRightBar = FALSE;
    // protected $contentLeftBar = FALSE;
    protected $show_top_menu = true;
    protected $show_sidebar_menu = false;
    protected $show_review_menu = false;
    protected $show_stol = false;
    

    public function __construct(MenusRepository $m_rep) {
    	$this->m_rep = $m_rep;

    }

    protected function renderOutput() {



        $menu_top = $this->m_rep->getMenu('top', app()->getLocale());
        $navigation = view('front.components.navigation')->with('menu', $menu_top)->render();
        $this->vars = array_add($this->vars, 'navigation', $navigation);
        $this->vars = array_add($this->vars, 'show_top_menu', $this->show_top_menu);

        $menu_sidebar = $this->m_rep->getMenu('sidebar', app()->getLocale());
        $sidebar_menu = view('front.components.sidebar_menu')->with('menu', $menu_sidebar)->render();
        $this->vars = array_add($this->vars, 'sidebar_menu', $sidebar_menu);
        $this->vars = array_add($this->vars, 'show_sidebar_menu', $this->show_sidebar_menu);

        $menu_review = $this->m_rep->getMenu('review', app()->getLocale());
        $review_menu = view('front.components.review_menu')->with('menu', $menu_review)->render();
        $this->vars = array_add($this->vars, 'review_menu', $review_menu);
        $this->vars = array_add($this->vars, 'show_review_menu', $this->show_review_menu);



        $header = view('front.header')->with('navigation', $navigation)->render();
        $this->vars = array_add($this->vars, 'header', $header);

        $footer = view('front.footer')->render();
        $this->vars = array_add($this->vars, 'footer', $footer);

        if (auth()->check()) {
            dump(auth()->user()->loc->full_name . ' - '. auth()->user()->role);
            dump(auth()->user()->loc->short_name . ' - '. auth()->user()->role);

        }

    	return view($this->template)->with($this->vars);
    }

    // public function getMenu() {
        
    //     $menu = $this->m_rep->get();
        
    //     $mBuilder = Menu::make('MyNav', function($m) use ($menu) {
             

    //         foreach($menu as $item) {
                
    //             if($item->parent == 0) {
    //                 $m->add($item->loc, route('home').$item->path)->id($item->id);
    //             }
    //             else {
    //                 if($m->find($item->parent)) {
    //                     $m->find($item->parent)->add($item->loc,$item->path)->id($item->id);
    //                 }
    //             }
    //         }
            
    //     });
        
    //     return $mBuilder;

    // }   


}
