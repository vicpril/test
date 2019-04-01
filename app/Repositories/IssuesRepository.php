<?php 

namespace App\Repositories;

use App\Models\Issue;

class IssuesRepository extends Repository{


	public function __construct(Issue $issue) {
		$this->model = $issue;
	}

	/*
    *  Get last Issue with current status
    *   without relations
    */
    public function oneLastByStatus ($status = FALSE) {
		$result = $this->model->select('*');

		$result = $result->orderBy('year', 'desc');
		$result = $result->orderBy('no', 'desc');
        $result = $result->orderBy('tom', 'asc');

		$result = $result->with(['articles' => function($query){
                                    $query->with('status');
                                }]);
        
		$result = $this->getIssuesByArticleStatus($status, $result->get());
// dd($result);
		return $result->first();
	}

    /*
    *  Get last Issue with current status
    *   with relations
    */
	public function one($attr = array(), $lang = 'ru', $load = TRUE, $orderBy = array('year', 'no', 'tom')) {
		$result = $this->model;

        if (!empty($attr)) {
            foreach ($attr as $key => $value) {
                $result = $result->where($key, $value);
            }
        }

        if (!empty($orderBy)) {
            foreach ($orderBy as $value) {
                $result = $result->orderBy($value, 'desc');
            }
        }

		$result = $result->first();

        if ($load) {
            if($result) {
                $result->load('articles');
                $result->articles->load(['meta', 'status', 'categories', 'tags', 'issue', 'users' => function($query){
                                    $query->with('meta');
                                }]);
                // $result->articles->users->load('meta');
                $result->articles->each(function($a) use ($lang) {
                    // Meta Article prepare
                    $prop = $a->meta->where('lang', $lang)->first()->getAttributes();
                    $a->setRawAttributes(array_merge($a->getAttributes(), $prop));

                    // dump($a->categories->first()->name);
                    // Meta Users prepare
                    $a->users->each(function($u) use ($lang) {
                        $prop = $u->meta->where('lang', $lang)->first()->getAttributes();
                        $u->setRawAttributes(array_merge($u->getAttributes(), $prop));
                    });

                });

                // dd($result);

            }
        }
    		
		return $result;
	}

	public function getIssuesByArticleStatus( $status = FALSE, $issues = FALSE, $orderBy = array('year', 'no', 'tom')) {

		if (!$issues) {
			$issues = $this->getIssues($orderBy);
		}
        
        if($status && $status !== '*') {
            // dd($issues);
            if (is_a($issues, '\Illuminate\Database\Eloquent\Model')) {
                $issues->articles = $issues->articles->filter(function($article) use ($status){
                        if ($article->status->name == $status) {
                            return $article;
                        }
                    });

            } else {
                $issues->each(function($issue) use ($status){
                    $issue->articles = $issue->articles->filter(function($article) use ($status){
                        if ($article->status->name == $status) {
                            return $article;
                        }
                    });
                    
                });

    			$issues = $issues->reject(function($issue) {
                    	return $issue->articles->count() < 1;
                });
            }

        }; 

        return $issues;
    }

    public function getIssues($orderBy = array('year', 'no', 'tom')) {
        $result = $this->model;

        if (!empty($orderBy)) {
            foreach ($orderBy as $value) {
                $result = $result->orderBy($value, 'desc');
            }
        }

        $result = $result->get()->load(['articles' => function($query){
                                    $query->with('status', 'users', 'categories', 'tags');
                                }]);
        // dd($result);
        return $result;
    }

    /*
    *	Сгруппировать статьи по рубрикам, не меняя порядка
    *
    *	$issue = [	
    *				['category1'=>'....', 'articles'=>collection(...)],
	*				['category2'=>'....', 'articles'=>collection(...)],
	*				['category3'=>'....', 'articles'=>collection(...)],	
    *			]
    *
    */
    public function prepareIssue ($issue = FALSE) {
    	if ($issue) {

    		$keyed = $issue->articles->mapToGroups(function($article, $articleCat) {
    			$categoriesSorted = collect($article->categories->sortBy('name')->values()->all());
    			$atricleCat = view(env('THEME').'.add.categories_link')->with('categories', $categoriesSorted)->render();
    			// $atricleCat = $categoriesSorted->implode('name', ' -> ');
    			return [$atricleCat => $article];
    		});

    		$keyed->all();

    		// dd($keyed);

    		$issue->mapedArticles = $keyed;

    		return $issue;
    	}
    }

    public function getNextIssue($issue) {
        if ($issue) {
            $nextIssue = $this->one(['full_no' => $issue->full_no + 1, 'tom' => 1], 'ru', false);
            return $nextIssue;
        }
        return NULL;
    }

    public function getPrevIssue($issue) {
        if ($issue) {
            $prevIssue = $this->one(['full_no' => $issue->full_no - 1,  'tom' => 1], 'ru', false);
            return $prevIssue;
        }
        return NULL;
    }

}

?>