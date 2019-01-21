@extends(env('THEME_BACK').'.back.index')


@section('css')
  <!-- DataTables CSS -->
  <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}">
  
  <style>
    .address {
        font-size: 0.8em !important;
      }
  
  </style>
  
@endsection


@section('content')
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="title d-inline-block">Организации</h5>
            <button class="btn btn-primary btn-round d-inline-block float-right">Создать новую</button>
          </div>
          <div class="card-body">
            <table class="table table-striped table-bordered" id="jobs-table">
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Город</th>
                  <th>Адресс</th>
                  <th>Название(en)</th>
                  <th>Город(en)</th>
                  <th>Адресс(en)</th>
                </tr>
              </thead>
              <tbody>
<!--                 <tr>
                  <td></td>
                  <td></td>
                  <td</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> -->
                
                @foreach($jobs as $job)
                  <tr>
                    <td>{{ $job->title_ru }}</td>
                    <td>{{ $job->city_ru }}</td>
                    <td class="address">{{ $job->address_ru }}</td>
                    <td>{{ $job->title_en }}</td>
                    <td>{{ $job->city_en }}</td>
                    <td class="address">{{ $job->address_en }}</td>
                  </tr>
                @endforeach 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</div>
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
          responsive: true,
          "language": {
                "url": "/dataTables.russian.lang"
            },
//           ajax: '/admin/jobs',
//           "columns": [
//             { "data": "title_ru" },
//             { "data": "city_ru" },
//             { "data": "address_ru" },
//             { "data": "title_en" },
//             { "data": "city_en" },
//             { "data": "address_en" },
//           ]
        });
      });
    </script>
@endsection
