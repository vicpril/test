@extends(env('THEME_BACK').'.back.layout')

@isset($datatables){!! $datatables !!}@endisset

@section('css')
  <!-- DataTables CSS -->
  <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}"> -->
  
  <style>
    .address {
        font-size: 0.8em !important;
      }
  
  </style>
  
@endsection


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
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
            <div class="">
              <table class="table table-striped table-bordered table-responsive-md" style="width:100%" id="jobs-table">
                <thead class="text-primary">
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
              {{-- 
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
                  --}}
                </tbody>
              </table>
            </div>
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
          
        <form method="POST" action="{{ route('jobs.store') }}" id="jobForm">
          <div class="modal-header">
            <h5 class="title my-0">Новая организация</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">

              <div class="row">
                @csrf
                <input type="text" class="form-control" name="id" hidden disable>
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
          </div>

          <div class="modal-footer">
            <button class="btn btn-link btn-danger my-0 mr-auto d-none" type="delete" id="deleteJob" dismiss="modal">Удалить</button>
            <button class="btn btn-primary float-right my-0" type="submit" id="saveJob" dismiss="modal">Сохранить</button>
          </div>
        
        </form>
      </div>
    </div>
  </div>
@endsection

@section('footer')
  {!! $footer !!}
@endsection


@section('js')
    <!-- DataTables JavaScript -->
    <!-- <script type="text/javascript" src="{{ asset('js/datatables.js') }}" ></script> -->

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script defer>
      $(document).ready(function () {
        
        // DataTable - load
        $('#jobs-table').DataTable({
          // responsive: true,
          "language": {
                "url": "/dataTables.russian.lang"
          },
          // fixedHeader: true,
          ajax: "{{ url('/admin/jobs') }}",
          "columns": [
            { 
              // "width": "80%",
              "data": "title_ru",
              "render": function(data, type, row, meta){
                      return'<a href="#" class="text-info text-left p-0" data-toggle="modal" data-target="#jobModal" data-id="' + row.id + '" >' + data + '</a>';
              }
            },
            { "data": "city_ru" },
            { "data": "address_ru" },
            { "data": "title_en" },
            { "data": "city_en" },
            { "data": "address_en" },
          ],
          "drawCallback": function(settings, json) {
            $('#jobs-table tr td:nth-child(3n)').addClass('address');
          }
        });
        
        // seve Job
        $('#jobForm').submit(function(event) {
          var form = $(this);
          $.ajax({
            method: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            dataType: 'json',
            success: function(data)
            {
              $('#jobModal').modal('toggle');
              form.cleanform();
              $('#jobs-table').DataTable().ajax.reload();
              
              var color = (data.exception == undefined) ? "success" : "warning";
              var icon = (data.exception == undefined) ? "now-ui-icons ui-1_check" : "now-ui-icons ui-1_bell-53";
              nowuiDashboard.showNotification({
                color: color,
                message: data.message,
                icon: icon,
                from: 'top',
                align: 'right'
              });
            },
            error: function(data) {
              alert(data.message);
            }
          });
          event.preventDefault(); // avoid to execute the actual submit of the form.
        });

        
        //Load the Job in modal
        $('#jobModal').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var id = button.data('id') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          if (id !== undefined) {
            var data = $.ajax({
               method: 'get',
               url: 'jobs/' + id + '/edit',
               dataType: 'json',
               success: function(resp)
               {
                  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                  var modal = $('#jobModal');
                  modal.find('.modal-header h5').text('Организация: ' + resp.data.title_ru);
                  modal.find('input[name="id"]').val(resp.data.id);
                  modal.find('input[name="title_ru"]').val(resp.data.title_ru);
                  modal.find('input[name="city_ru"]').val(resp.data.city_ru);
                  modal.find('textarea[name="address_ru"]').val(resp.data.address_ru);
                  modal.find('input[name="title_en"]').val(resp.data.title_en);
                  modal.find('input[name="city_en"]').val(resp.data.city_en);
                  modal.find('textarea[name="address_en"]').val(resp.data.address_en);
                  $('#deleteJob').removeClass('d-none');
                  $('#saveJob').text('Обновить');
                  $('#jobForm').attr("method", "PUT");
                  $('#jobForm').attr("action", "/admin/jobs/" + resp.data.id);
               }
            });
          } else {
            var modal = $('#jobModal');
            modal.find('.modal-header h5').text('Новая организация');
            $('#deleteJob').addClass('d-none');
            $('#saveJob').text('Сохранить');
            $('#jobForm').cleanform();
            $('#jobForm').attr("method", "POST");
            $('#jobForm').attr("action", "/admin/jobs");
          }
        });
        

        // delete Job
        $('#deleteJob').on('click', function(event) {
          var id = $('#jobForm input[name="id"]').val();
          var title = $('#jobForm input[name="title_ru"]').val();
          event.preventDefault()
              $.ajax({
                method: "DELETE",
                headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: "{{ url('/admin/jobs') }}/" + id,
                dataType: 'json',
                beforeSend:function(){
                     return confirm("Удалить организацию " + title + "?");
                },
                success: function(data)
                 {
                    $('#jobModal').modal('toggle');
                    $('#jobForm').cleanform();
                    $('#jobs-table').DataTable().ajax.reload();
                    
                    var color = (data.exception == undefined) ? "success" : "warning";
                    var icon = (data.exception == undefined) ? "now-ui-icons ui-1_check" : "now-ui-icons ui-1_bell-53";
                    nowuiDashboard.showNotification({
                      color: color,
                      message: data.message,
                      icon: icon,
                      from: 'top',
                      align: 'right'
                    });
                 },
                error: function(data) {
                  alert(data.message);
                }
          });
          
        });
      
        (function( $ ) {
           //form clean
          $.fn.cleanform = function() {
            $(this).find("input[type=text], textarea").val("");
          };
          
        })( jQuery );
        
      });
      
      
    </script>
@endsection
