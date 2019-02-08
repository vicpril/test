@extends(env('THEME_BACK').'.back.layout')

@isset('datatables'){!! $datatables !!}@endisset

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
  {!! $footer !!}
@endsection


@section('js')

@endsection
 
