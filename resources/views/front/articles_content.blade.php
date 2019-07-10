@if($issue)   
    
  
      @foreach($issue->mapedArticles as $category => $articles)
<section>
            <h3 class="category-title mb-4">
               {!! $category !!}
            </h3>
                     
                     @foreach($articles as $article)
                        
                        @include('front.articles_preview', ['article'=>$article])

                     @endforeach
            @endforeach
  
 </section>
  

@else

   <h3>Выпуск в базе не найден</h3>

@endif




