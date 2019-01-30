<tr id="{{ $file->id }}">
  <td>{{ $file->id }}</td>
  <td>{{ $file->title }}</td>
  <td>{{ $file->url }}</td>
  <td>{{ $file->created_at }}</td>
  <td>{{ $file->updated_at }}</td>
  <td><a class="icon-link-delete align-items-center" title="Удалить {{ $file->title }}">
    <i class="now-ui-icons ui-1_simple-remove"></i>
  </a></td>

</tr>