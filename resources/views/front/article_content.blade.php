


@if($article && $article->status->name == 'public')
   <h3 class="pb-3 mb-4 font-italic border-bottom">
      {{ $article->title }}
   </h3>

   <div class="blog-post">
      <!-- ISSUE LINKS -->
         @include(env('THEME').'.add.issue_links')
      <!-- END ISSUE LINKS -->

      <!-- CATEGORIES -->
      <div class="article-category">
         @foreach($article->categories as $key => $category)
            <a href="{{ route('categories.show', ['alias'=>$category->alias ]) }}" class="category-link">{{ $category->name() }}</a>@if($key < ($article->categories->count() - 1))<span> -> </span>@endif 
         @endforeach
      </div>
      <!-- END CATEGORIES -->

      <!-- DOI -->
      <div class="article-doi">
         <b>DOI: </b><span>{{ $article->doi }}</span>
      </div>
      <!-- END DOI -->

      

      <!-- AUTHORS -->
      <div class="article-preview-authors">
         <ul class="article-preview-authors-list">
            @foreach($article->users as $user)
               <li class="article-author-link">
                  <a href="{{ route('authors.show', ['alias' => $user->alias]) }}">{{ $user->loc->short_name }}</a>
               </li>
            @endforeach
         </ul>
      </div>
      <!-- END AUTHORS -->

      <!-- TAGS -->
      @if($article->tags)
         <div class="article-tags">
            <span class="label-article-tags">
               Темы материала:
               @foreach($article->tags as $key => $tag)
                  <a href="{{ route('tags.show', ['alias' => $tag->alias]) }}">{{ $tag->name() }}</a>
                  @if($key !== $article->tags->count() - 1)
                     <span>, </span>
                  @endif
               @endforeach
            </span>
         </div>
      @endif
      <!-- END TAGS -->
         
      <!-- DOWNLOAD LINK -->
      @if($article->file_link)
      <div class="article-download">
         <span class="label-article-link">
            Вы можете скачать статью по ссылке:
         </span>
         
         $article->file_link
      </div>   
      @endif
      <!-- END DOWNLOAD LINK -->

   </div>





@else

   <h3>Статья в базе не найдена</h3>

@endif