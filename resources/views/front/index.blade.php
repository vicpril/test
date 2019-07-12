@extends('front.layout')

@section('navigation')
	{!! $navigation !!}
@endsection

@section('sidebar')
	@include('front.sidebar')
@endsection

@section('review_menu')
	{!! $review_menu !!}
@endsection

@section('title')
	{!! $title !!}
@endsection

@section('content')
	{!! $content !!}
@endsection

@section('scripts')
@endsection