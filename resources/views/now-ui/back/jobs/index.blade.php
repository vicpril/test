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
            <h5 class="title d-inline-block mr-3 mb-0">Организации</h5>
            <button class="btn btn-primary btn-round d-inline-block my-0" id="newJob" type="button" data-toggle="modal" data-target="#jobModal">
              Создать новую
            </button>
          </div>
          <div class="card-body">
            <table class="table table-striped table-bordered" id="jobs-table">
              <thead class="text-info">
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
  <div class="modal fade" id="jobModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
          
          <div class="modal-header">
            <h5 class="title my-0">Новая организация</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">

        <form method="POST" action="{{ route('jobs.store') }}" id="formJob">
              <div class="row">
                @csrf
                <input type="text" class="form-control" hidden disable>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="title_ru">Название</label>
                    <input type="text" class="form-control" name="title_ru" id="title_ru" required>
                  </div>

                  <div class="form-group">
                    <label for="city_ru">Город</label>
                    <input type="text" class="form-control" name="city_ru">
                  </div>

                  <div class="form-group">
                    <label for="address_ru">Адресс</label>
                    <textarea type="text" class="form-control" rows="3" name="address_ru"></textarea>
                  </div>

                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="title_en">Название - eng</label>
                    <input type="text" class="form-control" name="title_en">
                  </div>

                  <div class="form-group">
                    <label for="city_en">Город - eng</label>
                    <input type="text" class="form-control" name="city_en">
                  </div>

                  <div class="form-group">
                    <label for="address_en">Адресс - eng</label>
                    <textarea type="text" class="form-control" rows="3" name="address_en"></textarea>
                  </div>
                </div>
              </div>
        </form>
          </div>

          <div class="modal-footer">
            <button class="btn btn-primary float-right my-0" type="submit" id="saveNewJob" dismiss="modal">Сохранить</button>
          </div>
        
      </div>
    </div>
  </div>
@endsection


@section('js')
    <!-- DataTables JavaScript -->
    <script src="{{ asset('js/datatables.js') }}"></script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
      $(document).ready(function () {
        
        // DataTable - load
        $('#jobs-table').DataTable({
          responsive: true,
          "language": {
                "url": "/dataTables.russian.lang"
          },
          fixedHeader: true
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
        
        // seve Job
        $('#saveNewJob').on('click', function() {
          $.ajax({
            method: $('#formJob').attr('method'),
            url: $('#formJob').attr('action'),
            data: $('#formJob').serialize(),
            dataType: 'json',
            success: function(data)
             {
                $('#jobs-table').parents('.modal').modal('toggle');
                alert(data.success); // show response from the PHP скрипт.
             }  
          })
        })
        
      });
    </script>
@endsection
