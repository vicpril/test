@if($issue)   
   <h2 class="pb-3 mb-4 font-italic border-bottom">
      Идеи и Идеалы №{{ $issue->no }} ({{ $issue->full_no }}), {{ $issue->year }} г. Том:{{ $issue->tom }} | 
      @if($issue->tom == 1)
         <a class="article-title-tom-link" href="{{ route('articles', ['year' => $issue->year,
            'no' => $issue->no,
            'tom' => 2,
            ]) }}">2</a>
      @else
         <a class="article-title-tom-link" href="{{ route('articles', ['year' => $issue->year,
            'no' => $issue->no,
            'tom' => 1,
            ]) }}">1</a>
      @endif
      </h2>

      <div class="blog-post">
         <h4 class="">Содержание</h4>

            @foreach($issue->mapedArticles as $category => $articles)

               <div class="issue-category-group">
                     <div class="issue-category-title">
                        {!! $category !!}
                     </div>
                     
                     @foreach($articles as $article)
                        
                        @include(env('THEME').'.add.article_preview')

                     @endforeach
               </div>
            @endforeach

      </div>

      <nav class="blog-pagination">
         @if($prevIssue)
            <a class="btn btn-outline-primary" href="{{ route('articles') }}?year={{$prevIssue->year}}&no={{$prevIssue->no}}&tom={{$prevIssue->tom}}">Предыдущий выпуск №{{$prevIssue->full_no}}</a>
         @endif

         @if($nextIssue)
            <a class="btn btn-outline-primary" href="{{ route('articles') }}?year={{$nextIssue->year}}&no={{$nextIssue->no}}&tom={{$nextIssue->tom}}">Следующий выпуск №{{$nextIssue->full_no}}</a>
         @endif
      </nav>

<!-- MODAL TRIGGER -->
    <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">Launch Modal</button>

    <!-- MODAL -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal Title</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis
            architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo.
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <br>


@else

   <h3>Выпуск в базе не найден</h3>

@endif
