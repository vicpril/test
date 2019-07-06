<i>@foreach($article->users as $user)
  {{$user->en->last_name}} {{$user->en->first_name}}@if(strlen($user->en->first_name) - 1 == 1).@endif{{''}}@if(!$loop->last), @endif
  @endforeach
</i> {{$article->en->title}}. <i>Ideas and Ideals</i>, {{$year}}, Issue {{$no}}, part {{$part}}, pp. {{$article->firstPage}}-{{$article->lastPage}}. DOI: {{$article->doi}}