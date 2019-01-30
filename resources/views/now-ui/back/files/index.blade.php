@extends(env('THEME_BACK').'.back.layout')


@section('css')
  <!-- DataTables CSS -->
  <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}"> -->
  
  <style>
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
            <button class="btn btn-primary btn-round d-inline-block my-0" id="newFile" type="button" data-toggle="modal" data-target="#fileModal">
              Добавить новый
            </button>
          </div>
          <div class="card-body">
              <table class="table table-striped table-bordered table-responsive-lg" style="width:100%" id="filesTable">
                <thead class="text-primary">
                  <tr>
                    <th>ID</th>
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
  <div class="modal fade" id="fileModal">
    <div class="modal-dialog">
      <div class="modal-content">
          
        <form method="POST" action="{{ route('files.store') }}" id="fileForm">
          <div class="modal-header">
            <h5 class="title my-0">Добавить файл</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">

            <div class="row">
                @csrf
                <input type="text" class="form-control" name="id" hidden disable>
                <div class="col-md-12">
                  <label for="title d-block">Файл</label>
                  <input type="file" class="" name="file" id="file" required>

                  <div class="form-group mt-2">
                    <label for="title">Название</label>
                    <input type="text" class="form-control" name="title" id="title" required>
                  </div>
                  
                </div>
              
            </div>
                  

          <div class="modal-footer pb-0">
            <button class="btn btn-link btn-danger my-0 mr-auto d-none" type="delete" id="deleteFile" dismiss="modal">Удалить</button>
            <button class="btn btn-primary float-right my-0" type="submit" id="saveFile" dismiss="modal">Добавить</button>
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
    {{-- <script type="text/javascript" src="{{ asset('js/datatables.js') }}" ></script> --}}

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script defer>
      $(document).ready(function () {
        
        // Set up file's title on change
        $('#file').on('change', function(e){
          var filepath = $(this).val();
//           var filename = filepath.replace(/^.*?([^\\\/]*)$/, '$1');
          var filename = filepath.split(/[\\/]/g).pop().split('.')[0];
          $('#title').val(filename); 
        });
        
        // DataTable - load
        $('#filesTable').DataTable({
          "language": { "url": "/dataTables.russian.lang"},
          "order": [ 4, 'desc' ],
          "columnDefs": [
            { "orderable": false, "targets": 5 }
          ]
        });
        
        // seve File
        $('#fileForm').submit(function(event) {
          event.preventDefault(); // avoid to execute the actual submit of the form.
          var form = $(this);
          $.ajax({
            method: form.attr('method'),
            url: form.attr('action'),
            data: new FormData(this),
              contentType: false,
              cache: false,
              processData:false,
            
            dataType: 'json',
            success: function(data)
            {
              $('#fileModal').modal('hide');
              form.cleanform();
              if (data.exception == undefined) {
                var color =  "success";
                var icon = "now-ui-icons ui-1_check";
                  var table = $('#filesTable').DataTable();
                  table.row($("tr#" + data.id)).remove();
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
            },
            error: function(data) {
              nowuiDashboard.showNotification({
                color: "danger",
                message: data.message,
                icon: "now-ui-icons ui-2_settings-90",
                from: 'top',
                align: 'right'
              });
            }
          });
        });

        
        //Load the Job in modal
//         $('#fileModal').on('show.bs.modal', function (event) {
//           var button = $(event.relatedTarget) // Button that triggered the modal
//           var id = button.data('id') // Extract info from data-* attributes
//           // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//           if (id !== undefined) {
//             var data = $.ajax({
//                method: 'get',
//                url: 'files/' + id + '/edit',
//                dataType: 'json',
//                success: function(resp)
//                {
//                   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//                   var modal = $('#fileModal');
//                   modal.find('.modal-header h5').text('Организация: ' + resp.data.title_ru);
//                   modal.find('input[name="id"]').val(resp.data.id);
//                   modal.find('input[name="title_ru"]').val(resp.data.title_ru);
//                   modal.find('input[name="city_ru"]').val(resp.data.city_ru);
//                   modal.find('textarea[name="address_ru"]').val(resp.data.address_ru);
//                   modal.find('input[name="title_en"]').val(resp.data.title_en);
//                   modal.find('input[name="city_en"]').val(resp.data.city_en);
//                   modal.find('textarea[name="address_en"]').val(resp.data.address_en);
//                   $('#deleteJob').removeClass('d-none');
//                   $('#saveJob').text('Обновить');
//                   $('#fileForm').attr("method", "PUT");
//                   $('#fileForm').attr("action", "/admin/files/" + resp.data.id);
//                }
//             });
//           } else {
//             var modal = $('#fileModal');
//             modal.find('.modal-header h5').text('Новая организация');
//             $('#deleteJob').addClass('d-none');
//             $('#saveJob').text('Сохранить');
//             $('#fileForm').cleanform();
//             $('#fileForm').attr("method", "POST");
//             $('#fileForm').attr("action", "/admin/jobs");
//           }
//         });
        

        // delete File
        $(document).on('click', '.delete', function(event) {
          var id = $(this).closest('tr').attr('id');
          var title = $(this).closest('tr').children('td.file-title:first').text();
          event.preventDefault()
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
                    $('#fileModal').modal('hide');
                    $('#fileForm').cleanform();
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
        });
      
        (function( $ ) {
           //form clean
          $.fn.cleanform = function() {
            $(this).find("input[type=text], input[type=file]").val("");
          };
          
        })( jQuery );
        
      });
      
      
    </script>
@endsection
