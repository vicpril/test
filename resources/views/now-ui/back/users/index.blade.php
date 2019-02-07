@extends(env('THEME_BACK').'.back.layout')


@section('css')
  <!-- DataTables CSS -->
  <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}"> -->
  
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
            <h5 class="title d-inline-block mr-3 mb-0">Авторы</h5>
            <a class="btn btn-primary btn-round d-inline-block my-0" href="{{ route('users.create') }}">
              Добавить нового автора
            </a>
          </div>
          <div class="card-body">
            <div class="">
              <table class="table table-striped table-bordered table-responsive-md" style="width:100%" id="users-table">
                <thead class="text-primary">
                  <tr>
                    <th>Автор</th>
                    <th>Eng</th>
                    <th>E-mail</th>
                    <th>Роль</th>
                    <th>Статьи</th>
                  </tr>
                </thead>
                <tbody>
              
                  @foreach($users as $user)
                    <tr>
                      <td>{{ $user->displayName }}</td>
                      <td>{{ $user->en->last_name }} {{ $user->en->initials }}</td>
                      <td>{{ $user->email }}</td>
                      <td>{{ $user->role }}</td>
                      <td>{{ count($user->articles) }}</td>
                    </tr>
                  @endforeach 
                 
                </tbody>
              </table>
            </div>
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
    <!-- DataTables JavaScript -->
    <!-- <script type="text/javascript" src="{{ asset('js/datatables.js') }}" ></script> -->

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script defer>
      $(document).ready(function () {
        
        // DataTable - load
        $('#users-table').DataTable({
          "language": {
                "url": "/dataTables.russian.lang"
          },
        });



      });
    </script>
@endsection
