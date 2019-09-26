@extends('front.layout')

@section('navigation')
	{!! $navigation !!}
@endsection

@section('review_menu')
	{!! $review_menu !!}
@endsection

@section('sidebar_menu')
	{!! $sidebar_menu !!}
@endsection

@section('title')
	{!! $title !!}
@endsection

@section('content')
	{!! $content !!}
@endsection

@section('tag_menu')
	@include('front.components.tag_menu')
@endsection

@section('scripts')
@endsection