@extends('front.index')

@section('stol_menu')
    @include('front.components.stol_menu')
@endsection

@section('content')
		@if($articles)
			@foreach ($articles as $article)

					@component('front.articles_preview', ['article'=>$article])
							@slot('breadcrumb')
										@component('front.components.breadcrumbs', ['article'=> $article])@endcomponent
							@endslot
					@endcomponent
        
			@endforeach

    @else
        <h3>@lang('Статьи не найдены')</h3>
    @endif
@endsection

@section('contentFooter')
		<div class="row mx-2 d-flex">
			<div class="col d-flex justify-content-start">
				{{$articles->links()}}
			</div>
			
				<div class="col d-flex justify-content-end">
				<button class="btn btn-link toTop">
						<strong>@lang('К началу страницы')</strong>
				</button>
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