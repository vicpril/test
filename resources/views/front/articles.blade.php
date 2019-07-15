@extends('front.layout')

@section('navigation')
	{!! $navigation !!}
@endsection


@section('stol_menu')
    @include('front.components.stol_menu')
@endsection

@section('review_menu')
	{!! $review_menu !!}
@endsection

@section('title')
	{!! $title !!}
@endsection

@section('subtitle')
	@lang('Содержание тома')
@endsection

@section('content')
    @if($issue)   
        @foreach($issue->mapedArticles as $category => $articles)
        <section>
                    <h3 class="category-title mb-4">
                    {!! $category !!}
                    </h3>
                            @foreach($articles as $article)
                                
                                @include('front.articles_preview', ['article'=>$article])
        
                            @endforeach
        </section>
        @endforeach
    @else
        <h3>Выпуск в базе не найден</h3>
    @endif
@endsection

@section('contentFooter')
    <div class="row mx-2 d-flex">

    <div class="col d-flex justify-content-start">
    @if($prevIssue)
        <a class="btn btn-primary float-right" href="{{ route('articles') }}?year={{$prevIssue->year}}&no={{$prevIssue->no}}&part={{$prevIssue->part}}">Предыдущий выпуск №{{$prevIssue->full_no}}</a>
    @endif
    </div>

    <div class="col d-flex justify-content-center">
    <button class="btn btn-link toTop">
        <strong>Back to top</strong>
    </button>
    </div>

    <div class="col d-flex justify-content-end">
    @if($nextIssue)
        <a class="btn btn-primary" href="{{ route('articles') }}?year={{$nextIssue->year}}&no={{$nextIssue->no}}&part={{$nextIssue->part}}">Следующий выпуск №{{$nextIssue->full_no}}</a>
    @endif
    </div>

    </div>
@endsection

@push('scripts')
    <script>
    $('.toTop').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 'slow');         
		});
    </script>
@endpush