@if(count($menu->roots()) > 0)
<div class="card shadow mb-3">
    <div class="card-header">
      <h5 class="font-italic mb-0">@lang('Информация для авторов')</h5>
    </div>
    <div class="card-body">
         <ul class="list-unstyled  mb-0">
            @foreach($menu->roots() as $item)
            <li>
                <a href="{{ $item->url() }}">{{ $item->title }}</a>        
            </li>
            @endforeach
          </ul>
    </div>
</div>
@endif