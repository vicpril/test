@extends(env('THEME_BACK').'.back.index')


@section('css')
  <!-- DataTables CSS -->
  <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}">
@endsection


@section('content')
  
@endsection


@section('modals')
  
@endsection


@section('js')
    <!-- DataTables JavaScript -->
    <script src="{{ asset('js/datatables.js') }}"></script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
      $(document).ready(function () {
        $('#jobs-table').DataTable({
          responsive: true
        });
      });
    </script>
@endsection
