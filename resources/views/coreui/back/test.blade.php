@extends(env('THEME_BACK').'.back.layout')

@push('css')
<!-- MediaManager -->
<!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"> -->
<link rel="stylesheet" href="{{ asset('assets/vendor/MediaManager/style.css') }}"/>
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
@endsection


@section('modals')
@endsection

@section('footer')
  @include(env('THEME_BACK').'.back.footer')
@endsection

@push('lib')
		<!-- CKEditor -->
		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>
		<!-- MediaManager -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.0/jsmediatags.min.js"></script>
@endpush

@push('js')
@endpush
 
