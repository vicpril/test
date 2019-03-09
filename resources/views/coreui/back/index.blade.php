@extends(env('THEME_BACK').'.back.layout')

@section('css')
  
@endsection


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection

@section('content')

@endsection


@section('modals')
  
@endsection

@section('footer')
  @include(env('THEME_BACK').'.back.footer')
@endsection


@section('js')

@endsection
 
