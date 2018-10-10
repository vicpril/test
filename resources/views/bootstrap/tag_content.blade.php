
@if($tag)	
   <h2 class="pb-3 mb-4 font-italic border-bottom">
      Тема: {{ $tag->name }}
   </h2>

      <div class="blog-post">
                     
                     @foreach($tag->articles as $article)

                        @include(env('THEME').'.add.article_preview')

                     @endforeach

      </div>


@else

   <h3>Тема "{{$tag->name}}"" в базе не найдена</h3>

@endif