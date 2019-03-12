@extends(env('THEME_BACK').'.back.layout')

@section('css')
<!--  Select2     -->
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
		<h2 class="mb-3">@isset($id)
			Редактировать автора
			@elseНовый автор
			@endisset
		</h2>
    <form method="POST" action="{{ route('users.store') }}">
      @csrf
			<user-profile @isset($id):id="{{ $id }}"@endisset :old="{{ json_encode(Session::getOldInput()) }}"></user-profile>
      
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
		
		<!-- JOB MODAL -->
		<div class="modal fade" id="jobModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="title my-0">Добавить новое место работы</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
					</div>
					
					<div class="modal-body">
						<div class="form-group">
							<label for="row">Строка</label>
							<input type="text" class="form-control" id="jobRow">
						</div>
						<div class="form-group">
							<label for="job_ru">На русском</label>
							<textarea id="job_ru" cols="30" rows="10" class="form-control"></textarea>
						</div>
						<div class="form-group">
							<label for="job_en">На английском</label>
							<textarea id="job_en" cols="30" rows="10" class="form-control"></textarea>
						</div>
					</div>
					
					<div class="modal-footer">
						<button class="btn btn-primary float-right my-0" type="button" id="saveJob" dismiss="modal">Добавить</button>
					</div>
					
				</div>
			</div>
		</div>
		<!-- END JOB MODAL -->

@endsection


@section('footer')
  {!! $footer !!}
@endsection


@section('js')
    <!-- Select 2 -->
    <script type="text/javascript" src="{{ asset('vendor/select2/js/select2.full.min.js') }}"></script>

		<!-- CKEditor -->
		<!-- <script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script> -->
    <!-- <script type="text/javascript" src="https://cdn.ckeditor.com/4.11.3/standard/ckeditor.js"></script> -->
    <!-- Set script -->
    @yield('modal_set_js')

    <!-- Upload script -->
    @yield('modal_upload_js')

		{{-- @include(env('THEME_BACK').'.back.users.autocomplite') --}}

@endsection
