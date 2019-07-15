    @if(count($stol_menu) > 0)
        <div class="card mb-3">
            <div class="card-header">
            <h5 class="font-italic mb-0">@lang('Дискуссионный клуб')</h5>
            </div>
            <div class="card-body">
                <ul class="list-stol pl-3 mb-0">
                    @foreach($stol_menu as $article)
                    <li>
                        <span class="date text-secondary">{{ 
                            \Carbon\Carbon::parse($article->date_review)
                                            ->formatLocalized('%d %B %Y')
                        }}</span>
                    </li>
                    <a href="{{ $article->link }}">{{ $article->loc->title }}</a>        
                    @endforeach
                </ul>
            </div>
            <div class="card-footer">
                <a href="{{ route('club') }}" class="float-right">@lang('Посмотреть все')</a>
            </div>
        </div>
    @endif
