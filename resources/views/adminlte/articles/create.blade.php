@extends('back.articles.template')

@section('form-open')
    <form method="post" action="{{ route('articles.store') }}">
@endsection