@extends('front.index')

@section('stol_menu')
	@include('front.components.stol_menu')
@endsection

@section('subtitle')
	{{$subtitle}}
@endsection

@section('content')
	@if($user->avatar)
		<div class="avatar-container">
			<figure class="figure avatar">
				<img src="{{ Storage::url($user->avatar) }}" class=" figure-img img-fluid rounded">
				<figcaption class="figure-caption text-center">{{ $user->loc->short_name }}</figcaption>
			</figure>
		</div>
	@endif

	<div class="px-2">
		@if($user->loc->description)
		{!! $user->loc->description !!}
		@else
		<p>@lang('Данный автор еще не представил биографическую информацию.')</p>
		@endif
	</div>

	<div class="row mt-4 mx-2">
		@if(count($user->articles) > 0 )
			<h4 class="text-uppercase text-center">@lang('Материалы автора'):</h4>
			<ul class="list-unstyled">
				@foreach($user->articles as $article)
				<li>
					<div class="mb-2">
						<a class=" h6 article-title"
							href="{{ route('article', $article->alias) }}">{{ $article->loc->title }}</a>
						<div class="d-inline-block">
							@component('front.components.breadcrumbs', ['article'=>$article])@endcomponent
						</div>
					</div>
				</li>
				@endforeach
			</ul>
		@else
			<p>@lang('У данного автора еще нет материалов.')</p>
		@endif
	</div>

@endsection