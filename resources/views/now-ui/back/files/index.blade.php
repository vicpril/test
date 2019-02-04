@extends(env('THEME_BACK').'.back.layout')


@section('css')
  <!-- DataTables CSS -->
  <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}"> -->
  
  <style>
    .path {
      font-size: 0.8em !important;
    }
    .icon-link-delete {
      color: grey !important;
    }
    .icon-link-delete:hover {
      color: red !important;
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
            <h5 class="title d-inline-block mr-3 mb-0">Файлы</h5>
            <button class="btn btn-primary btn-round d-inline-block my-0" id="newFile" type="button" data-toggle="modal" data-target="#uploadFileModal">
              Добавить новый
            </button>
          </div>
          <div class="card-body">
              <table class="table table-striped table-bordered table-responsive-lg" style="width:100%" id="filesTable">
                <thead class="text-primary">
                  <tr>
                    {{-- <th>ID</th> --}}
                    <th>Название</th>
                    <th>Путь</th>
                    <th>Время создания</th>
                    <th>Время редактирования</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                 @foreach($files as $file)
                    @include(env('THEME_BACK').'.back.files.table_row', $file)  
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
  <!--   UPLOAD FILE MODAL -->
  @include(env('THEME_BACK').'.back.files.modal_upload')
  <!--   END UPLOAD FILE MODAL -->
    
<!--  UPDATE TITLE MODAL -->
  <div class="modal fade" id="titleModal">
    <div class="modal-dialog">
      <div class="modal-content">
          
        <form method="PUT" action="" id="titleForm">
          <div class="modal-header">
            <h5 class="title my-0">Изменить название файла</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">

            <div class="row">
                @csrf
                <input type="text" class="form-control" name="id" hidden disable>
                <div class="col-md-12">

                  <div class="form-group mt-2">
                    <label for="title">Название</label>
                    <input type="text" class="form-control" name="title" id="title-up" required>
                  </div>

                </div>
            </div>

          </div>
          
          <div class="modal-footer">
            <button class="btn btn-primary float-right my-0" type="submit" id="saveTitleFile" dismiss="modal">Обновить</button>
          </div>
        
      </form>
    </div>
  </div>    
</div>
<!--  END UPDATE TITLE MODAL -->

    
@endsection

@section('footer')
  {!! $footer !!}
@endsection


@section('js')
{{-- <!-- DataTables JavaScript -->
    <script type="text/javascript" src="{{ asset('js/datatables.js') }}" ></script> --}}

<!-- Upload script -->
    @yield('modal_upload_js')


<script type="text/javascript">
$(document).ready(function () {
          
// DataTable - load
  $('#filesTable').DataTable({
    "language": { "url": "/dataTables.russian.lang"},
    "order": [ 3, 'desc' ],
    "columnDefs": [
      { "orderable": false, "targets": 4 }
    ]
  });

//update title
    $('#titleForm').submit(function(event){
      event.preventDefault();
      var form = $(this);
      var id = $(this).find('input[name=id]').val();
      $.ajax({
        method: "PUT",
        url: "{{ url('/admin/files') }}/" + id,
        data: form.serialize(),
        dataType: "json",
        success: function(data)
        {
            $('#titleModal').modal('hide');
            form.cleanform();
            if (data.exception == undefined) {
              var color =  "success";
              var icon = "now-ui-icons ui-1_check";
                var table = $('#filesTable').DataTable();
                table.row($("tr#" + id)).remove();
                table.row.add($(data.row)[0]).draw();
            } else {
              var color = "warning";
              var icon = "now-ui-icons ui-1_bell-53";
            }
            nowuiDashboard.showNotification({
              color: color,
              message: data.message,
              icon: icon,
              from: 'top',
              align: 'right'
            });
        }
        })
      })
        
  //Load the File in modal
    $(document).on('show.bs.modal', '#titleModal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var id = button.data('id') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        var data = $.ajax({
            method: 'get',
            url: 'files/' + id + '/edit',
            dataType: 'json',
            success: function(resp)
            {
              // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
              var modal = $('#titleModal');
              modal.find('input[name="title"]').val(resp.data.title);
              modal.find('input[name="id"]').val(resp.data.id);
            }
        });
    });

// delete File
    $(document).on('click', '.delete', function(event) {
      var id = $(this).closest('tr').attr('id');
      var title = $(this).closest('tr').children('td.file-title:first').text();
      event.preventDefault()
      $.deleteFile(id, title);
    });
      
(function( $ ) {

//after uploaded function
          $.doAfterUploaded = function (data) {
            var table = $('#filesTable').DataTable();
            table.row($("tr#" + data.id)).remove();
            table.row.add($(data.row)[0]).draw();
          }

//delete file function
          $.deleteFile = function(id, title) {
            $.ajax({
                method: "DELETE",
                headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: "{{ url('/admin/files') }}/" + id,
                dataType: 'json',
                beforeSend:function(){
                     return confirm("Удалить файл " + title + "?");
                },
                success: function(data)
                 {
                    $('#uploadFileModal').modal('hide');
                    if (data.exception == undefined && data.status == 'success') {
                      var color =  "success";
                      var icon = "now-ui-icons ui-1_check";
                        var table = $('#filesTable').DataTable();
                        table.row($("tr#" + id)).remove().draw();
                    } else {
                      var color = "warning";
                      var icon = "now-ui-icons ui-1_bell-53";
                    }
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
          };
        })( jQuery );
      });

    </script>
@endsection
