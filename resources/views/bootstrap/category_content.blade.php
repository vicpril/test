
@if($category)	
   <h2 class="pb-3 mb-4 font-italic border-bottom">
      Материалы под рубрикой: {{ $category->title }}
   </h2>

      <div class="blog-post">
                     
                     @foreach($category->articles as $article)

                        @include(env('THEME').'.add.article_preview')

                     @endforeach

      </div>


@else

   <h3>Выпуск в базе не найден</h3>

@endif