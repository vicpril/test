@extends('front.index')

@section('stol_menu')
    @include('front.components.stol_menu')
@endsection

@section('breadcrumbs')
<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-white py-0 px-2">
    <li class="breadcrumb-item">
			<a href="{{ route('page', ['pageAlias'=>'archive']) }}#{{ $article->issue->year }}"
				 >@lang('Журнал :year года', [
        'year' => $article->issue->year,
        'fullno' => $article->issue->full_no
    ])</a></li>
    <li class="breadcrumb-item">
			<a href="{{ route('articles', ['year' => $article->issue->year,
            'no' => $article->issue->no,
            'part' => $article->issue->part,
            ]) }}">@lang('№:no, часть :part', [
										'no' => $article->issue->no,
										'part' => $article->issue->part
				])</a>
		</li>
    <li class="breadcrumb-item active" aria-current="page">{{ $article->category->loc }}</li>
  </ol>
</nav>
@endsection

@section('subtitle')
		{!! $subtitle !!}
@endsection

@section('content')
	@admin
     <!-- LABEL -->
    <div class="row">
        @if($article->status->type)
           <span class="badge badge-pill badge-success mr-2">Опубликована</span>
        @else
           <span class="badge badge-pill badge-danger mr-2">Черновик</span>
        @endif
        <a href="{{ $article->editLink }}" target="_blank">Редактровать</a>
    </div>
    <!-- END LABEL -->
    @endadmin

	<span class="text-dark"><strong>@lang('Авторы'):</strong></span>
	<ul class="authors mb-3 list-unstyled list-group list-group-horizontal">
			@foreach($article->users as $user)
			<li>
				<strong>
				 <a class="author-name" href="{{ route('authors.show', $user->alias) }}">{{$user->loc->short_name}}</a>@if(!$loop->last)<span>,&ensp;</span>@endif
				</strong>
			</li>
			@endforeach
	</ul>

  @if($article->doi)
		<div class="article-doi mb-3">
			<span class="text-dark"><strong>DOI:</strong> </span><a href="{{ url('http://dx.doi.org/') }}{{$article->doi}}">{{$article->doi}}</a>
		</div>
	@endif

	@if( count($article->tags)>0 )
		<div class="article-tags mb-3">
			<span class="text-dark"><strong>@lang('Темы материала'):</strong></span>
			<ul class="authors list-unstyled list-group list-group-horizontal">
				@foreach($article->tags as $tag)
				<li>
					 <a class="text-info" href="{{ route('tags.show', $tag->alias) }}">{{$tag->loc}}</a>@if(!$loop->last)<span>,&ensp;</span>@endif
				</li>
				@endforeach
		</ul>	
		</div>
	@endif

	@if($article->applications)
		<div class="article-doi mb-3">
			<span class="text-dark d-block"><strong>@lang('Приложения к статье'):</strong></span>
			<div>
				{!! $article->applications !!}
			</div>
		</div>
	@endif

	@if($article->ru->file)
		<div class="article-doi mb-3">
			<span class="text-dark d-block"><strong>@lang('Вы можете скачать статью по ссылке'):</strong></span>
			<a href="{{ Storage::url($article->ru->file) }}" target="_blank">{!! $article->loc->fileTitle !!}</a>
		</div>
	@endif

	@if($article->file_audio)
		<div class="article-doi mb-3">
			<span class="text-dark d-block"><strong>@lang('Вы можете прослушать аудио версию статьи'):</strong></span>
			<a href="{{ Storage::url($article->file_audio) }}" target="_blank">{{ explode('/', $article->file_audio)[count(explode('/', $article->file_audio))-1] }}</a>
		</div>
	@endif
@endsection

@section('contentFooter')
	@if( $prevArticle || $nextArticle)
			<div class="row mx-2 d-flex">

			<div class="col d-flex justify-content-start">
			@if($prevArticle)
					<a class="btn btn-primary float-right" href="{{ route('article', $prevArticle->alias) }}">Предыдущая статья выпуска</a>
			@endif
			</div>

			<div class="col d-flex justify-content-center">
			<button class="btn btn-link toTop">
					<strong>@lang('К началу страницы')</strong>
			</button>
			</div>

			<div class="col d-flex justify-content-end">
			@if($nextArticle)
					<a class="btn btn-primary" href="{{ route('article', ['aliasArticle' => $nextArticle->alias]) }}">Следующая статья выпуска</a>
			@endif
			</div>

			</div>

	@endif
@endsection