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
	<div class="row">
	</div>
    <form method="POST" action="{{ route('users.store') }}">
      @csrf
      <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="title  mb-0">Персональные данные</h5>
              </div>
              <div class="card-body">
              
                  <div class="row">
                    <div class="col-md-8 col-sm-7 col-xs-7">
                      <div class="form-group">
                        <label class="h6">Полное имя</label>
                        <input type="text" class="form-control mr-2" name="full_name" placeholder="Ф.И.О." value="{{old('full_name')}}" required >
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-5 col-xs-5 text-right">
                      <label class="d-block">Автозаполнение</label>
                      <button type="button" class="btn btn-primary btn-simple btn-round py-2 my-0" id="autocompliteBtn">Заполнить</button>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-7 pr-1">
                      <div class="form-group">
                        <label class="h6" for="email">Email</label>
                        <input type="email" class="form-control @if($errors->first('email')) is-invalid @endif" name="email" placeholder="Email" value="{{old('email')}}" required>
												@if($errors->first('email'))
													<div class="invalid-feedback">
														{{ $errors->first('email') }}
													</div>
												@endif
                      </div>
                    </div>
                    <div class="col-md-5 pl-1">
                      <div class="form-group">
                        <label class="h6" for="alias">Логин</label>
                        <input type="text" class="form-control @if($errors->first('alias')) is-invalid @endif" name="alias" value="{{old('alias')}}" @if(isset($user->alias)) disabled="" @endif>
                     		@if($errors->first('alias'))
													<div class="invalid-feedback">
														{{ $errors->first('alias') }}
													</div>
												@endif
											</div>
                    </div>
                  </div>
                
                  <label class="h6 mt-2">Данные на русском</label>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label for="last_name_ru">Фамилия</label>
                        <input type="text" class="form-control" name="last_name_ru"  value="{{old('last_name_ru')}}">
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="first_name_ru">Имя</label>
                        <input type="text" class="form-control" name="first_name_ru" value="{{old('first_name_ru')}}">
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="patronymic_ru">Отчество</label>
                        <input type="text" class="form-control" name="patronymic_ru" value="{{old('patronymic_ru')}}">                
                    </div>
                    <div class="col-md-2 pl-1">
                        <label for="initials_ru">Инициалы</label>
                        <input type="text" class="form-control" name="initials_ru" value="{{old('initials_ru')}}">                
                    </div>
                  </div>
                
                  <label class="h6 mt-2">Данные на английском</label>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label for="last_name_en">Last Name</label>
                        <input type="text" class="form-control" name="last_name_en" value="{{old('last_name_en')}}">
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="first_name_en">First Name</label>
                        <input type="text" class="form-control" name="first_name_en" value="{{old('first_name_en')}}">
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="patronymic_en">Middle Name</label>
                        <input type="text" class="form-control" name="patronymic_en" value="{{old('patronymic_en')}}">                
                    </div>
                    <div class="col-md-2 pl-1">
                        <label for="initials_en">Initials</label>
                        <input type="text" class="form-control" name="initials_en" value="{{old('initials_en')}}">                
                    </div>
                  </div>
								
								<label class="h6 mt-2">ORCID</label>
                  <div class="row">
                    <div class="col-md-7 pr-1">
                      <div class="form-group">
                        <input type="text" class="form-control" name="orcid"  value="{{old('orcid')}}">
                      </div>
                    </div>
								</div>
              </div>
            </div>
						
						<div class="card">
              <div class="card-header">
                <h5 class="title mb-0">Сведения о месте работы</h5>
              </div>
              <div class="card-body">
								 <label class="h6 mt-2">Степень и звание</label>
                  <div class="row">
                    <div class="col-md-6 pr-1">
                      <div class="form-group">
                        <label for="graduate_ru">На русском</label>
                        <input type="text" class="form-control" name="graduate_ru" value="{{old('graduate_ru')}}">
                      </div>
                    </div>
                    <div class="col-md-6 pl-1">
                        <label for="graduate_en">На английском</label>
                        <input type="text" class="form-control" name="graduate_en" value="{{old('graduate_en')}}">
                    </div>
									</div>
									
								<label class="h6 mt-3">Место работы (должность)</label>
								<div class="row">
									<div class="col-12">
									
										<table class="table table-responsive-md" style="width:100%" id="jobsTable">
											<thead>
												<th class="">На русском</th>
												<th class="">На английском</th>
											</thead>
											<tbody>

											</tbody>
										</table>
									</div>
								</div>
								
								
							</div>
						</div>
						
						<div class="card">
              <div class="card-header">
                <h5 class="title mb-0">Биография</h5>
              </div>
              <div class="card-body">
								<div class="col-md-12">
									<div class="row">
										<div class="form-group">
											<label class="h6">На русском</label>
											<textarea name="descriptin_ru" id="" cols="100" rows="3" class="form-control description"></textarea>
										</div>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class="row">
										<div class="form-group">
											<label class="h6 mt-2">На английском</label>
											<textarea name="descriptin_en" id="" cols="100" rows="3" class="form-control description"></textarea>
										</div>
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
                    
                    <div class="d-none" id="image">
                      <img src="" alt="">
                      <label><a href="#" class="text-info text-center p-1" id="destroyImage">Поменять фотографию</a></label>
                    </div>
										
                    <div class="text-center" id="downloadImage">
                      <label class="d-block mb-0">Фотография не загружена</label>
                      <button type="button" class="btn btn-sm btn-primary btn-simple btn-round" data-toggle="modal" data-target="#setFileModal">Загрузить</button>
                    </div>
                    <input type="text" class="d-none" name="avatar" value="@if(isset($user->avatar)){{$user->avatar}}@elseif(old('avatar')){{old('avatar')}}@else{!!-1!!}@endif">
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
    <script type="text/javascript" src="{{ asset('js/tableEditor.js') }}" ></script>

    
    <!-- Set script -->
    @yield('modal_set_js')

    <!-- Upload script -->
    @yield('modal_upload_js')

		@include(env('THEME_BACK').'.back.files.autocomplite')


<script type="text/javascript">
  
$( document ).ready(function() {
	
	// initiate jobs tableEditor
	$('#jobsTable').DataTable({
		"language": {
					"url": "/dataTables.russian.lang"
		},
		"paging":   false,
		"ordering": false,
		"info":     false,
		"searching": false,
	});
	
	// error alert
	@if($errors->all())
	$.notifyDefaults({
			type: "danger",
			allow_dismiss: true,
			delay: 8000
	});
	$.notify({
			title: "{{ $errors->first('title') }}",
			message: "",
		});
	@endif
  
  $('#destroyImage').on('click', function(e){
    e.preventDefault();
    $.destroyImage();
  });
	
	$('#autocompliteBtn').on('click', function(e){
		e.preventDefault();
		$.autocomplite_fields($('input[name="full_name"]').val());
	});
  
  
(function( $ ) {

//after uploaded function
    $.doAfterUploaded = function (data) {
			$.loadSelect(data.id);
    };
    
    // Reload select and set up uploaded document
		$.doAfterSet = function (id = '') {
			$('#setFileModal').modal('hide');
			if(id) {
				$('input[name="avatar"]').val(id);
				$.setupImage(id);
			}else{
				$('input[name="avatar"]').val(-1);
			}
		};
    
    $.setupImage = function(id) {
      $.ajax({
        url: "{{ url('/admin/files') }}/" + id,
        dataType: "json",
        success: function(response) {
					$('#image img').attr("src", "{{ asset('storage') }}/"+response.data.url);
					$('#image').removeClass('d-none');
					$('#downloadImage').addClass('d-none');
        }
      })
    };
    
    $.destroyImage = function() {
      $('input[name="avatar"]').val('');
      $('#image img').attr("src", "");
      $('#image').addClass('d-none');
      $('#downloadImage').removeClass('d-none');
    }


  })( jQuery )
  
	// set avatar source
		if ( $('input[name="avatar"]').val() > 0 ) {
			$.setupImage( $('input[name="avatar"]').val() );
		}

})

</script>



@endsection
