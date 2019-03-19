@extends(env('THEME_BACK').'.back.layout')

@push('css')
<!--  Select2     -->
<link rel="stylesheet" href="{{ asset('vendor/select2/css/select2.css') }}">

@endpush


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

    <form method="POST" 
					@if(isset($id))
						action="{{ route('users.update', $id) }}"
					@else
						action="{{ route('users.store') }}"
					@endif
					>
			@if(isset($id)) @method('PUT') @endif
      @csrf
			<user-profile 
				@isset($id):id="{{ $id }}"@endisset 
				:old="{{ json_encode(Session::getOldInput(), JSON_FORCE_OBJECT) }}"
				@if(count($errors) > 0)
					:errors="{{$errors}}"
				@endif
				></user-profile>
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

@push('lib')
    <!-- Select 2 -->
    <script defer type="text/javascript" src="{{ asset('vendor/select2/js/select2.full.min.js') }}"></script>

		<!-- CKEditor -->
		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>
@endpush

@push('js')
    <!-- Set script -->
    @yield('modal_set_js')

    <!-- Upload script -->
    @yield('modal_upload_js')

@endpush
