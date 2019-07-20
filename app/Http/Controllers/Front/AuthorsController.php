<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Models\User;
use App\Repositories\UsersRepository;
use App\Repositories\ArticlesRepository;

use Config;

class AuthorsController extends SiteController
{
    public function __construct(ArticlesRepository $a_rep) 
	{
		parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag)
        );
			
		$this->a_rep = $a_rep;
		
		$this->show_stol_menu = (config('app.locale') == 'ru') ? true : false;

	}

	public function index() {

        // $users = $this->getAuthors();

        // $content = view('front.authors_content')->with('users', $users)->render();
        // $this->vars = array_add($this->vars, 'content', $content);

        // $sidebar_menu = '';

        // $sidebar = view('front.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
        // $this->vars = array_add($this->vars, 'sidebar', $sidebar);

        // return $this->renderOutput();
    }

    public function show(User $user) {

        $this->setStatus();
		
        $this->prepareStolMenu();
    
        $this->template = 'front.author';
    
        $user->loadMissing([
            'meta',
            'articles',
            'articles.meta',
            'articles.status',
            'articles.issue'
        ]);

        $this->title = __("Информация об авторе");

        $this->subtitle = $user->loc->full_name;
        
        $user = ($this->onlyPublished) ? $user->published() : $user ;

        $this->vars = array_add($this->vars, 'user', $user);

        return $this->renderOutput();
    }

    public function getAuthor($alias) {
    	$user = $this->u_rep->one($alias);
    	$user = $this->u_rep->filerUserArticlesByStatus($user, 'public');
    	return $user;
    }

    public function getAuthors() {
    	$users = $this->u_rep->get('*', false, 'name');
        $users->load('articles');

    	//prepare for column-output
    	$col = Config::get('settings.authors_columns_count');
		$users = $users->mapToGroups(function($user, $key) use ($users, $col) {
			$maxInCols = ceil($users->count() / $col);
			$row = $key % $maxInCols;
			return [$row => $user];
		});
		// $users = $users->chunk($col);

		// dd($users);
    	
    	return $users;
    }
}
