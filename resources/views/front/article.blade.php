@extends('front.index')

@section('stol_menu')
    @include('front.components.stol_menu')
@endsection

@section('breadcrumbs')
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">@lang('Журнал :year года', [
        'year' => $article->issue->year,
        'fullno' => $article->issue->full_no
    ])</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
@endsection

@section('subtitle')
		{!! $subtitle !!}
@endsection

@section('content')
        hello
@endsection