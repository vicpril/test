@extends('front.index')

@section('stol_menu')
    @include('front.components.stol_menu')
@endsection

@section('content')
		@foreach($years as $year => $issues)
				<div class="col-4 d-flex justify-content-center">
						<h5>{{ $year }}</h5>
						<ul class="list-unstyled">
						@foreach($issues as $issue)
								<li><a href="{{ route('articles') }}?year={{$issue->year}}&no={{$issue->no}}&part={{$issue->part}}">Номер {{ $issue->no }} ({{$issue->fullno}}) Часть {{$issue->part}}</a></li>
						@endforeach
						</ul>
						
				</div>
		@endforeach
@endsection