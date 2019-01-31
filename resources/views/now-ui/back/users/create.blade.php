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
    <form method="POST" action="{{ route('users.store') }}">
      @csrf
    <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="title">Персональные данные</h5>
              </div>
              <div class="card-body">
              
                  <div class="row">
                    <div class="col-md-8 col-sm-7 col-xs-7">
                      <div class="form-group">
                        <label class="h6">Полное имя</label>
                        <input type="text" class="form-control mr-2" name="full_name" placeholder="Ф.И.О.">
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-5 col-xs-5 text-right">
                      <label class="d-block">Автозаполнение</label>
                      <button type="button" class="btn btn-primary btn-simple btn-round py-2 my-0" id="autoEnter">Заполнить</button>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-7 pr-1">
                      <div class="form-group">
                        <label class="h6" for="email">Email</label>
                        <input type="email" class="form-control" placeholder="Email">
                      </div>
                    </div>
                    <div class="col-md-5 pl-1">
                      <div class="form-group">
                        <label class="h6" for="alias">Логин</label>
                        <input type="text" class="form-control" name="alias" @if(isset($user->alias)) disabled="" @endif>
                      </div>
                    </div>
                  </div>
                
                  <label class="h6 mt-2">Данные на русском</label>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label for="last_name_ru">Фамилия</label>
                        <input type="text" class="form-control" name="last_name_ru">
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="first_name_ru">Имя</label>
                        <input type="text" class="form-control" name="first_name_ru">
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="patronymic_ru">Отчество</label>
                        <input type="text" class="form-control" name="patronymic_ru">                
                    </div>
                    <div class="col-md-2 pl-1">
                        <label for="initials_ru">Инициалы</label>
                        <input type="text" class="form-control" name="initials_ru">                
                    </div>
                  </div>
                
                  <label class="h6 mt-2">Данные на английском</label>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label for="last_name_en">Last Name</label>
                        <input type="text" class="form-control" name="last_name_en">
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="first_name_en">First Name</label>
                        <input type="text" class="form-control" name="first_name_en">
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="patronymic_en">Middle Name</label>
                        <input type="text" class="form-control" name="patronymic_en">                
                    </div>
                    <div class="col-md-2 pl-1">
                        <label for="initials_en">Initials</label>
                        <input type="text" class="form-control" name="initials_en">                
                    </div>
                  </div>
                

              </div>
            </div>
          </div>
      
          <div class="col-md-4">
            
            <div class="card">
<!--               <div class="card-header">
                <h5 class="title">Сохранить</h5>
              </div> -->
              <div class="card-body">
                <input class="btn btn-primary btn-block" type="submit" value="Сохранить">
              </div>
            </div>
            
            <div class="card">
                    <div class="card-header">
                      <h6>Фотография</h6>
                    </div>
              
                  <div class="card-body">
                    @if(isset($user->avatar))
                      <img src="{{ asset('storage/'.$user->avatar) }}" alt="">
                    @endif
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" name="avatar" id="customFile">
                      <label class="custom-file-label" for="customFile">Файл не выбран</label>
                    </div>
                  </div>
            </div>
          </div>
        </div>
    </form>
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
@endsection
