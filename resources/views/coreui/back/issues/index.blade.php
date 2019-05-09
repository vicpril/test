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
  <issues-index
        @isset($id):id="{{ $id }}"@endisset
				:old="{{ json_encode(Session::getOldInput(), JSON_FORCE_OBJECT) }}"
				@if(count($errors) > 0)
					:errors="{{$errors}}"
				@endif
  ></issues-index>
</div>
@endsection


@section('modals')

@endsection


@section('footer')
  {!! $footer !!}
@endsection

@push('lib')
<!-- elFinder -->
<script defer type="text/javascript" src="{{ asset('packages/barryvdh/elfinder/js/standalonepopup.js') }}"></script>
@endpush

@push('js')
@endpush
