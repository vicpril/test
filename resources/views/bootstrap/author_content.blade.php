@if($user && $user->alias !== 'admin')
   <h3 class="pb-3 mb-4 font-italic border-bottom">
      {{ $user->name }}
   </h3>

   <div class="blog-post">
      
      @if($user->jobs)
      <div class="author-jobs">
         @foreach($user->jobs as $job)
            {!! $job->name !!}<span>. </span>
         @endforeach
      </div>
      @endif

      <!-- EMAIL -->
      <div class="email">
         <span>'Электронная почта: '</span><a href="mailto:{{ $user->email }}">{{ $user->email }}</a>
      </div>
      <!-- END EMAIL -->
     

      <!-- AUTHOR ARTICLES -->
      <div class="author-articles">
      @if($user->articles && $user->articles->count() > 0)
         <h5>Материалы автора:</h5>
         <ul>
            @foreach($user->articles as $article)
            <li class="user-article">
               <h6 class=""><a href="{{ route('article', ['alias' => $article->alias]) }}">{{ $article->title }}</a></h6>
               @include(env('THEME').'.add.issue_links')
            </li>
            @endforeach
         </ul>

      @else

         <h6>У автора еще нет опубликованных статей</h6>

      @endif
      </div>
      <!-- END AUTHOR ARTICLES -->


   </div>





@else

   <h3>Автор в базе не найден</h3>

@endif