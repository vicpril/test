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
  <h2 class="mb-3">Резервные копии базы данных</h2>
  <div class="row">
      <div class="col-md-12">
          <backup-list></backup-list>
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
