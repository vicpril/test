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
	
	<div class="row">
        <!-- main.html (html input and js for open new window with elFinder for select file) -->
			<input type="text" class="form-control" value="" id="idOfInput" onfocus="return openElFinder(event, 'idOfInput');"/>
    </div>
	
		<vue-test></vue-test>
</div>
@endsection


@section('modals')
@endsection

@section('footer')
  @include(env('THEME_BACK').'.back.footer')
@endsection

@push('lib')
		<!-- CKEditor -->
		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>

<!--    <script defer type="text/javascript" src="/packages/barryvdh/elfinder/js/standalonepopup.min.js"></script> -->
<!-- <script defer type="text/javascript" src="{{ asset('packages/barryvdh/elfinder/js/elfinder.min.js') }}"></script> -->

@endpush

@push('js')

<script defer>
$( document ).ready(function() {
    window.input_id = '';
    window.openElFinder = function (event, input_id) {
        event.preventDefault();
        window.single = true;
        window.old = false;
        window.input_id = input_id;
        window.open('/elfinder/popup/'+input_id, '_blank', 'menubar=no,status=no,toolbar=no,scrollbars=yes,height=500,width=800');
      
        return false;
    };
    // function to update the file selected by elfinder
    window.processSelectedFile = function (filePath, requestingField) {
        $('#' + requestingField).val(filePath).trigger('change');
    }
});
</script>

@endpush
 
