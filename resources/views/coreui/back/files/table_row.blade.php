<tr id="{{ $file->id }}">
  {{-- <td>{{ $file->id }}</td> --}}
  <td class="file-title "><a href="#" class="text-info text-left p-0" data-toggle="modal" data-target="#titleModal" data-id="{{ $file->id }}">{{ $file->title }}</a></td>
  <td class="path">
    @if(Storage::disk('public')->exists($file->url))
    <a href="{{ asset('storage/'.$file->url) }}" class="text-info" target="_blank">{{ $file->url }}</a>
    @else
    <span class="text-mute">{{ $file->url }}</span>
    <span class="badge badge-danger">Файл на сервере отстутствует</span>
    @endif
  </td>
  <td>{{ $file->created_at }}</td>
  <td>{{ $file->updated_at }}</td>
  <td><a class="icon-link-delete delete" title="Удалить {{ $file->title }}">
    <i class="now-ui-icons ui-1_simple-remove"></i>
  </a></td>

</tr>