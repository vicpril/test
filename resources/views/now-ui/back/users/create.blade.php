@extends(env('THEME_BACK').'.back.layout')


@section('css')
  {{-- <!-- DataTables CSS -->
  <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}"> --> --}}
    <link rel="stylesheet" href="{{ asset('vendor/select2/css/select2.css') }}">
    
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
                <div class="card-header">
                  <h6>Сохранить изменения</h6>
                </div>
              <div class="card-body">
                <input class="btn btn-primary btn-round btn-block" type="submit" value="Сохранить">
              </div>
            </div>
            
            <div class="card" id="photoCard">
                    <div class="card-header">
                      <h6>Фотография</h6>
                    </div>
              
                  <div class="card-body">
                    <div id="photo">
                    @if(isset($user->avatar))
                      <img src="{{ asset('storage/'.$user->avatar) }}" alt="">
                    @else
                      <div class="text-center">
                        <label class="d-block mb-0">Фотография не загружена</label>
                        <button type="button" class="btn btn-sm btn-primary btn-simple btn-round" data-toggle="modal" data-target="#setFileModal">Загрузить</button>
                      </div>
                    @endif
                    </div>
                    <input type="text" class="d-none" name="avatar" value="-1">
                  </div>
            </div>
          </div>
        </div>
    </form>
</div>
@endsection


@section('modals')
    <!-- SET FILE MODAL -->
    @include(env('THEME_BACK').'.back.files.modal_set')
    <!-- END SET FILE MODAL -->

    <!-- UPLOAD FILE MODAL -->
    @include(env('THEME_BACK').'.back.files.modal_upload')
    <!-- END UPLOAD FILE MODAL -->

@endsection


@section('footer')
  {!! $footer !!}
@endsection


@section('js')
    <!-- Select 2 -->
    <script type="text/javascript" src="{{ asset('vendor/select2/js/select2.full.min.js') }}"></script>
    {{-- <!-- DataTables JavaScript -->
    <!-- <script type="text/javascript" src="{{ asset('js/datatables.js') }}" ></script> --> --}}
    
    <!-- Set script -->
    @yield('modal_set_js')

    <!-- Upload script -->
    @yield('modal_upload_js')


<script type="text/javascript">
$(document).ready(function () {
  
  
  (function( $ ) {

//after uploaded function
    $.doAfterUploaded = function (data) {
			$.loadSelect(data.id);
    }
    
    // Reload select and set up uploaded document
		$.doAfterSet = function () {
			var id = $('#setFileSelect').val();
			$('#setFileModal').modal('hide');
      $.ajax({
        url: "{{ url('/admin/files') }}/" + id,
        dataType: "json",
        success: function(response) {
          $('#photo').prepend("<img src={{ asset('storage') }}/"+response.data.url+">");
          $('#photo').children('div').addClass('d-none');
        }
      })
		};


  })( jQuery )
})
</script>

@endsection
