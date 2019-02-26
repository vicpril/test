<?php

namespace Idea\Http\Controllers;

use Illuminate\Http\Request;

use Idea\Repositories\MenusRepository;

use Menu;


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
    

    public function __construct(MenusRepository $m_rep) {
    	$this->m_rep = $m_rep;

    }

    protected function renderOutput() {

        $menu = $this->getMenu();

        $navigation = view(env('THEME').'.navigation')->with('menu', $menu)->render();
        $this->vars = array_add($this->vars, 'navigation', $navigation);

        $header = view(env('THEME').'.header')->with('navigation', $navigation)->render();
        $this->vars = array_add($this->vars, 'header', $header);

        $footer = view(env('THEME').'.footer')->render();
        $this->vars = array_add($this->vars, 'footer', $footer);

        if (auth()->check()) {
            dump(auth()->user()->loc->fullName . ' - '. auth()->user()->role);
            dump(auth()->user()->loc->shortName . ' - '. auth()->user()->role);

        }

    	return view($this->template)->with($this->vars);
    }

    public function getMenu() {
        
        $menu = $this->m_rep->get();
        
        $mBuilder = Menu::make('MyNav', function($m) use ($menu) {
             

            foreach($menu as $item) {
                
                if($item->parent == 0) {
                    $m->add($item->title, route('home').$item->path)->id($item->id);
                }
                else {
                    if($m->find($item->parent)) {
                        $m->find($item->parent)->add($item->title,$item->path)->id($item->id);
                    }
                }
            }
            
        });
        
        return $mBuilder;

    }   


}
