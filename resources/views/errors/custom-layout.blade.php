@extends('front.layout')

@section('navigation')
	{!! $navigation !!}
@endsection

@section('review_menu')
	
@endsection

@section('sidebar_menu')
	
@endsection

@section('tag_menu')
	@include('front.components.tag_menu')
@endsection

@section('title')
		
@endsection

@section('content')
	
           <p>
						@yield('message')
						</p>
                        
						<a href="{{ url()->previous() }}">
								@lang('Вернуться на предыдущую страницу')
						</a>
@endsection

@section('scripts')
@endsection