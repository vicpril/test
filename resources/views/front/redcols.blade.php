@extends('front.index')

@section('stol_menu')
	@include('front.components.stol_menu')
@endsection

@section('content')
	@foreach($redcols as $name => $users)

		<div class="row mb-2">
			<h4>{{ $name }}</h4>
			<ul class="list-unstyled">
				@foreach($users as $row)
					<li>
					@isset($row->)
					</li>
				@endforeach
			
			</ul>
			
		</div>
	@endforeach
@endsection

@section('contentFooter')
    <div class="col d-flex justify-content-center">
    <button class="btn btn-link toTop">
        <strong>@lang('К началу страницы')</strong>
    </button>
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