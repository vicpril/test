<i>@foreach($article->users as $user)
  {{$user->ru->short_name}}@if(!$loop->last), @endif
  @endforeach
</i> {{$article->ru->title}} // Идеи и Идеалы. - {{$year}}. - №{{$no}}. - Т{{$part}}. - С. {{$article->firstPage}}-{{$article->lastPage}}. DOI: {{$article->doi}}