  <article class="ml-4">
    @admin
     <!-- LABEL -->
      <div class="row">
        ID: {{$article->id}}
        @if($article->status->type)
           <span class="badge badge-pill badge-success mr-2">Опубликована</span>
        @else
           <span class="badge badge-pill badge-danger mr-2">Черновик</span>
        @endif
        <a href="{{ $article->editLink }}" target="_blank">Редактровать</a>
      </div>
      <!-- END LABEL -->
    @endadmin
         <h5 class="article-title">
            {{ $article->loc->title }}
         </h5>
         <ul
            class="authors mb-2 list-unstyled list-group list-group-horizontal"
         >
            @foreach($article->users as $user)
            <li>
               <a href="{{ route('authors.show', $user->alias) }}">{{$user->loc->short_name}}</a>@if(!$loop->last)<span>,&ensp;</span>@endif
            </li>
            @endforeach
         </ul>
         <div class="doi py-1">
            <span><strong>DOI: </strong></span>
            {{ $article->doi }}
         </div>
         <div class="links my-2 d-flex">
            <a
               class=""
               data-toggle="collapse"
               href="#annotation-{{ $article->id }}"
               aria-expanded="false"
               aria-controls="annotation"
               ><i
                  class="fa fa-chevron-down"
                  aria-hidden="true"
               ></i>
               @lang('Аннотация')
            </a>

            <ul
               class="ml-auto list-unstyled list-group list-group-horizontal"
            >
               <li><a href="{{ route('article', $article->alias) }}">@lang('Текст статьи')</a></li>
               <li><a href="#">PDF</a></li>
               <li><a href="#">@lang('Аудио версия')</a></li>
            </ul>
         </div>
         <div class="collapse annotation" id="annotation-{{ $article->id }}">
            <div class="article-section article-udk">
               <span><strong>@lang('УДК'): </strong></span>{{ $article->udk }}
            </div>

            <div class="article-section article-annotation">
               <span><strong>@lang('Аннотация'): </strong></span>
               <p class="mb-0">
                  {{ $article->loc->annotation }}
               </p>
            </div>

            <div class="article-section article-keywords">
               <span><strong>@lang('Ключевые слова'): </strong></span>
               {{ $article->loc->keywords }}
            </div>
         </div>
      </article>