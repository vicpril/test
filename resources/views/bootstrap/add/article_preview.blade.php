

<!-- ARTICLE PREVIEW -->
<div id="article-{{$article->id}}" class="card article-preview mb-2">
  <div class="card-header">
      <!-- LABEL -->
      @if($article->status->name == 'public')
         <span class="badge badge-pill badge-success float-right">Public</span>
      @endif

      @if($article->status->name == 'private')
         <span class="badge badge-pill badge-danger float-right">private</span>
      @endif
      <!-- END LABEL -->
      
      <!-- TITLE -->
      <div class="article-preview-title float-left">
         <h5 class="card-title mb-0"><a href="{{ route('article', ['alias' => $article->alias]) }}">{{ $article->title }}</a></h5>
      </div>
      <!-- END TITLE -->
  </div>   
  <div class="card-body">
      

      <!-- ISSUE LINK -->
      @if(Route::currentRouteName() !== 'articles')
         
         @include(env('THEME').'.add.issue_links')

      @endif
      <!-- END ISSUE LINK -->

      <!-- AUTHORS -->
      <ul class="article-preview-authors-list">
         @foreach($article->users as $user)
            <li class="article-preview-author-link">
               <a href="{{ route('authors.show', ['alias' => $user->alias]) }}">{{ $user->loc->shortName }}</a>
            </li>
         @endforeach
      </ul>
      <!-- END AUTHORS -->

      <!-- DOI -->
      @if($article->doi)
         <div class="article-preview-doi">
            <b>DOI: </b><span>{{ $article->doi }}</span>
         </div>
      @endif
      <!-- END DOI -->

         @if($article->tags)
            @foreach ($article->tags as $key => $tag)
               <div class="article-preview-tags">
                  <b>TAG: </b><span>{{ $tag->name[Config::get('app.locale')] }}</span>
               </div>
            @endforeach
         @endif
      
      <!-- ANNOTATION BUTTON -->
      @if($article->annotation)
            <a class="btn btn-sm btn-outline-success annotation-button" href="#" class="button small">Аннотация</a>
      @endif
      <!-- TEXT BUTTON -->
            <a class="btn btn-sm btn-outline-info text-button" href="{{ route('article', ['alias' => $article->alias]) }}" class="button small">Текст</a>
      
      <!-- ANNOTATION BLOCK -->
      <div id="block-article-{{ $article->id }}" class="article-annotation-block" hidden>
         @if($article->udk)
            <div class="article-preview-udk">
               <b>УДК: </b><span>{{ $article->udk }}</span>
            </div>
         @endif
         
         

         @if($article->annotation)
            <div class="article-preview-annotation">
               <b>Аннотация: </b><br />
               <div>{{ $article->annotation }}</div>
            </div>
         @endif

         @if($article->keywords)
            <div class="article-preview-keywords">
               <b>Ключевые слова: </b><span>{{ $article->keywords }}</span>
            </div>
         @endif

      </div>
      <!-- END ANNOTATION BLOCK -->
   </div>
</div>
<!-- END ARTICLE PREVIEW -->

