@extends(env('THEME_BACK').'.back.layout')

@push('css')
  
@endpush


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection


@section('content')
<div class="content">
  <issues-index></issues-index>
</div>
@endsection


@section('modals')

@endsection


@section('footer')
  {!! $footer !!}
@endsection

@push('lib')
@endpush    

@push('js')
@endpush
