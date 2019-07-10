<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Repositories\IssuesRepository;
use App\Repositories\ArticlesRepository;

class ArticlesController extends SiteController
{
    //
    public function __construct(IssuesRepository $i_rep, ArticlesRepository $a_rep) {
		parent::__construct(
			new \App\Repositories\MenusRepository(new \App\Models\Menu),
			new \App\Repositories\TagsRepository(new \App\Models\Tag)
		);

		$this->i_rep = $i_rep;
		$this->a_rep = $a_rep;

		// $this->s_rep = $s_rep;

		$this->template = 'front.index';
	}


    /*
    *
    *  Render articles list of last Issue
    *
    */
    public function index(Request $request) {
        
        if (!$request->year || !$request->no || !$request->part) {
            return $this->redirectOnLastIssue();
        }

       // dump($request);
        $issue = $this->getIssue($request, '*');
        $nextIssue = $this->i_rep->getNextIssue($issue);
        $prevIssue = $this->i_rep->getPrevIssue($issue);
			
			$this->title = view('front.articles_title')->with('issue', $issue)->render();
			$this->subtitle = 'Содержание тома';

    	$this->content = view('front.articles_content')->with('issue', $issue)->render();
			
    	$this->content_footer = view('front.articles_footer')->with('nextIssue', $nextIssue)
                                                        ->with('prevIssue', $prevIssue)
                                                        ->render();
			
        // $this->vars = array_add($this->vars, 'content', $content);

        // $sidebar_menu = '';

        // $sidebar = view('front.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
        // $this->vars = array_add($this->vars, 'sidebar', $sidebar);

    	return $this->renderOutput();
    }


    /*
    *
    *  Render current article
    *
    */
    public function show(Article $article) {
				
//         $article = $this->getArticle($alias);
        dump($article);
        // $nextIssue = $this->i_rep->getNextIssue($issue);
        // $prevIssue = $this->i_rep->getPrevIssue($issue);

        $content = view('front.article_content')->with('article', $article)
                                                        // ->with('nextArticle', $nextIssue)
                                                        // ->with('prevArticle', $prevIssue)
                                                        ->render();
        $this->vars = array_add($this->vars, 'content', $content);

        $sidebar_menu = '';

        $sidebar = view('front.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
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
                //                             'part' => $issue->part,
                                        // ]));
                return redirect()->route('articles', [
                                            'year' => $issue->year,
                                            'no' => $issue->no,
                                            'part' => $issue->part,
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
                echo $issue->part . ' - ' ;
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
