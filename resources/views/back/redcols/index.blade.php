@extends('back.layout')

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
  <div class="row">
      <div class="col-md-12">
          <redcols-list></redcols-list>
      </div>
    </div>
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
