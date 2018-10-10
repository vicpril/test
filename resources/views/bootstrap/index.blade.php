@extends(env('THEME').'.layouts.site')

@section('header')
	{!! $header !!}
@endsection

<!-- @section('navigation')
	{!! $navigation !!}
@endsection -->

@section('content')
	{!! $content !!}
@endsection

@section('footer')
	{!! $footer !!}
@endsection
