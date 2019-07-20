<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Models\User;
use App\Repositories\UsersRepository;
use App\Repositories\ArticlesRepository;

use Config;

class AuthorsController extends SiteController
{
    public function __construct(ArticlesRepository $a_rep, UsersRepository $u_rep) 
	{
		parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag)
        );
			
		$this->a_rep = $a_rep;
		$this->u_rep = $u_rep;
		
		$this->show_stol_menu = (config('app.locale') == 'ru') ? true : false;

	}

	public function index() {

        $this->setStatus();
		
        $this->prepareStolMenu();
    
        $this->template = 'front.authors';
    
        $this->title = __("Наши авторы");

        $users = $this->getAuthors(true);

        $this->vars = array_add($this->vars, 'userGroups', $users);

        return $this->renderOutput();
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

    public function getAuthors($groups = false) {
        $users = $this->u_rep->get('*', ['role', 'author']);
        $users->loadMissing(['meta']);
        $users = $users->sortBy(function ($user) {
            return $user->loc->short_name;
        });
        
        if ($groups) {
            $users = $users->mapToGroups(function ($user) {
                return [ucfirst(mb_substr($user->loc->short_name, 0, 1)) => $user];
            });
        }

    	return $users;
    }
}
