<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Repositories\IssuesRepository;
use App\Repositories\ArticlesRepository;

class ArticlesController extends SiteController
{
    //
    public function __construct(IssuesRepository $i_rep, ArticlesRepository $a_rep) {
		parent::__construct(new \App\Repositories\MenusRepository(new \App\Models\Menu));

		$this->i_rep = $i_rep;
		$this->a_rep = $a_rep;

		// $this->s_rep = $s_rep;

		$this->template = env('THEME').'.single';
	}


    /*
    *
    *  Render articles list of last Issue
    *
    */
    public function index(Request $request) {
        
        if (!$request->year || !$request->no || !$request->tom) {
            return $this->redirectOnLastIssue();
        }

        
       // dump($request);
        $issue = $this->getIssue($request, '*');
        $nextIssue = $this->i_rep->getNextIssue($issue);
        $prevIssue = $this->i_rep->getPrevIssue($issue);

    	$content = view(env('THEME').'.articles_content')->with('issue', $issue)
                                                        ->with('nextIssue', $nextIssue)
                                                        ->with('prevIssue', $prevIssue)
                                                        ->render();
        $this->vars = array_add($this->vars, 'content', $content);

        $sidebar_menu = '';

        $sidebar = view(env('THEME').'.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
        $this->vars = array_add($this->vars, 'sidebar', $sidebar);

    	return $this->renderOutput();
    }


    /*
    *
    *  Render current article
    *
    */
    public function show($alias) {

        $article = $this->getArticle($alias);
        // dump($article);
        // $nextIssue = $this->i_rep->getNextIssue($issue);
        // $prevIssue = $this->i_rep->getPrevIssue($issue);

        $content = view(env('THEME').'.article_content')->with('article', $article)
                                                        // ->with('nextArticle', $nextIssue)
                                                        // ->with('prevArticle', $prevIssue)
                                                        ->render();
        $this->vars = array_add($this->vars, 'content', $content);

        $sidebar_menu = '';

        $sidebar = view(env('THEME').'.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
        $this->vars = array_add($this->vars, 'sidebar', $sidebar);

        return $this->renderOutput();
    }


    /*
    *
    *  Check last Issue and rerirect if it isset
    *
    */
    public function redirectOnLastIssue() {
            $issue = $this->i_rep->oneLastByStatus('public');
            // dump($request);
            // dump($issue);
            if ($issue) {
                // dump(route('articles', [
                //                             'year' => $issue->year,
                //                             'no' => $issue->no,
                //                             'tom' => $issue->tom,
                                        // ]));
                return redirect()->route('articles', [
                                            'year' => $issue->year,
                                            'no' => $issue->no,
                                            'tom' => $issue->tom,
                                        ]);
            } else {
                return die('Записей нет');
            }
    }


    public function getArticle($alias) {
        
        $article = $this->a_rep->one($alias, app()->getLocale());

        return $article;
    }

    public function getArticleByStatus($alias) {
        
        $article = $this->a_rep->one($alias, 'public');

        return $article;
    }

    public function getIssue(Request $request, $articleStatus = '*') {
        
    
        $issue = $this->i_rep->one($request->all(), app()->getLocale());

        if ($issue) {
            $issue = $this->i_rep->getIssuesByArticleStatus($articleStatus, $issue);
            $issue = $this->i_rep->prepareIssue($issue);
        }

        return $issue;
    }





    /***********************************
    *              FOR TEST
    ***********************************/

    public function renderIssues($issues = FALSE) {
        if ($issues) {
            if (is_a($issues, 'Illuminate\Database\Eloquent\Model')) {
                $this->renderIssue($issues);
            } 
            if (is_a($issues, 'Illuminate\Database\Eloquent\Collection')) {
                $issues->each(function($issue){
                    $this->renderIssue($issue);
                });
            }
            
        }
    }

    public function renderIssue($issue = FALSE) {
        if ($issue) {
            foreach ($issue->articles as $article) {
                echo $issue->id . ' - ' ;
                echo $issue->year . ' - ' ;
                echo $issue->no . ' - ' ;
                echo $issue->tom . ' - ' ;
                echo $article->id . ' - ' ;
                echo '<b>'.$article->title . '</b> - ' 
                    . $article->status->name . ' - ' ;

                foreach ($article->users as $user) {
                    echo '<i>'.$user->name  . '</i> - ';
                }

                foreach ($article->tags as $tag) {
                    echo $tag->name  . ' - ';
                }

                foreach ($article->categories as $category) {
                    echo $category->name  . ' - ';
                }

                echo '<br />';
            }
        }
    }

    

}
