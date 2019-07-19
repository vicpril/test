@extends('front.index')

@section('stol_menu')
    @include('front.components.stol_menu')
@endsection

@section('content')
		@if($articles)
			@foreach ($articles as $article)

					@include('front.articles_preview', ['article'=>$article])
        
			@endforeach

    @else
        <h3>@lang('Статьи не найдены')</h3>
    @endif
@endsection

@section('contentFooter')
{{--
    <div class="row mx-2 d-flex">

    <div class="col d-flex justify-content-start">
    @if($prevIssue)
        <a class="btn btn-primary float-right" href="{{ route('articles') }}?year={{$prevIssue->year}}&no={{$prevIssue->no}}&part={{$prevIssue->part}}">@lang('Предыдущий выпуск №:fullno', ['fullno' => $prevIssue->full_no] )</a>
    @endif
    </div>

    <div class="col d-flex justify-content-center">
    <button class="btn btn-link toTop">
        <strong>@lang('К началу страницы')</strong>
    </button>
    </div>

    <div class="col d-flex justify-content-end">
    @if($nextIssue)
        <a class="btn btn-primary" href="{{ route('articles') }}?year={{$nextIssue->year}}&no={{$nextIssue->no}}&part={{$nextIssue->part}}">@lang('Следующий выпуск №:fullno', ['fullno' => $nextIssue->full_no] )</a>
    @endif
    </div>

    </div>
--}}
@endsection

@push('scripts')
    <script>
    $('.toTop').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 'slow');         
		});
    </script>
@endpush