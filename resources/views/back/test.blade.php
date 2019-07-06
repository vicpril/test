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
        <!-- main.html (html input and js for open new window with elFinder for select file) -->
<!-- 			 <div class="input-group">
					<div class="input-group-btn">
							<a href="#" class="popup_selector btn btn-primary" data-inputid="image">Select an image</a>
					</div>
					
					<input class="form-control" type="text" id="image" name="image" value="">
			</div> -->
		
			<img src="" alt="">
    </div>
	
		<vue-test></vue-test>
</div>
@endsection


@section('modals')
@endsection

@section('footer')
  @include('back.footer')
@endsection

@push('lib')
		<!-- CKEditor -->
		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>

   <script defer type="text/javascript" src="{{ asset('packages/barryvdh/elfinder/js/standalonepopup.js') }}"></script>
<!-- <script defer type="text/javascript" src="{{ asset('packages/barryvdh/elfinder/js/elfinder.min.js') }}"></script> -->

@endpush

@push('js')
@endpush
 
