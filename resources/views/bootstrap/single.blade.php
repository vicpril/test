@extends(env('THEME').'.layouts.single')

@section('header')
	{!! $header !!}
@endsection

{{-- @section('navigation')
	{!! $navigation !!}
@endsection --}}

@section('content')
	{!! $content !!}
@endsection

@section('sidebar')
	{!! $sidebar !!}
@endsection

@section('footer')
	{!! $footer !!}
@endsection

{{-- @section('scripts')
	{!! $scripts OR '' !!}
@endsection --}}
