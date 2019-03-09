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
<div class="content">
  <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="d-inline-block mr-3 mb-0">Авторы</h3>
            <a class="btn btn-primary btn-round d-inline-block float-right my-0" href="{{ route('users.create') }}">
              Добавить нового автора
            </a>
          </div>
          <div class="card-body">
            <user-list></user-list>
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


@section('js')
    
@endsection