<?php

namespace App\Observers;

use App\Models\Article;

class ArticleObserver
{
    /**
     * Handle the article "created" event.
     *
     * @param  \App\Article  $article
     * @return void
     */
    public function created(Article $article)
    {
        //
    }

    /**
     * Handle the article "updated" event.
     *
     * @param  \App\Article  $article
     * @return void
     */
    public function updated(Article $article)
    {
        //
    }

    /**
     * Handle the article "deleting" event.
     *
     * @param  \App\Article  $article
     * @return void
     */
    public function deleting(Article $article)
    {
        // dd($article);
        
        $article->meta->each(function ($meta) {
            // $meta->article()->detach();
            
            $meta->delete();
        });
        $article->users()->sync([]);
        $article->categories()->sync([]);
        $article->tags()->sync([]);

    }

    /**
     * Handle the article "restored" event.
     *
     * @param  \App\Article  $article
     * @return void
     */
    public function restored(Article $article)
    {
        //
    }

    /**
     * Handle the article "force deleted" event.
     *
     * @param  \App\Article  $article
     * @return void
     */
    public function forceDeleted(Article $article)
    {
        //
    }
}
