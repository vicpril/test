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
  <h2 class="mb-3">{{$subtitle}}</h2>
  <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="d-inline-block mr-3 mb-0">Список всех страниц</h4>
            <a class="btn btn-primary btn-round d-inline-block float-right my-0" href="{{ route('pages.create') }}">
              Добавить новую страницу
            </a>
          </div>
          <div class="card-body">
            <pages-list></pages-list>
          </div>
        </div>
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
