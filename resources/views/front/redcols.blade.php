@extends('front.index')

@section('stol_menu')
	@include('front.components.stol_menu')
@endsection

@section('content')
	@foreach($redcols as $name => $users)

		<div class="mb-2">
			<h4>{{ $name }}</h4>
			<ul class="list-unstyled">
				@foreach($users as $row)
					<li>
						<div>
					@if($row->postLoc)
						<i>{{$row->postLoc}}:</i><br>
					@endif
						<a href="{{route('authors.show', ['alias'=>$row->user->alias])}}">
							@if(Config::get('app.locale') == 'ru')
								{{$row->user->loc->full_name}}
							@else
								{{$row->user->loc->short_name}}
							@endif
						</a>	
						@isset($row->user->loc->degree)
						, {{ $row->user->loc->degree }}
						@endif
						@if(count($row->user->loc->jobs) > 0)
							@foreach($row->user->loc->jobs as $job)
								, {{ $job }}
							@endforeach
						@endif
						</div>
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