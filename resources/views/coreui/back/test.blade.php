@extends(env('THEME_BACK').'.back.layout')

@push('css')
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> -->
@endpush


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection

@section('content')
<div class="content">
		<vue-test></vue-test>
		
		
	</div>
      
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
@endpush

@push('js')

@endpush
 
