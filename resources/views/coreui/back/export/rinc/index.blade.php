@header

@articleHead

{{--
<br>
@if($email_on)
yes
@else
no
@endif
<br>
@foreach($articles as $article)

{{ $article->category->ru }} // {{ $article->category->en }}
<br>
{{ $article->users[0]->ru->jobs[0] }} // {{ $article->users[0]->en->jobs[0] }}
<br>
     @foreach($article->users as $user)
        {{$user->emailHost}}
          <br>
    @endforeach
      

--}}


@body([
    'article' => $article,
    'index' => $loop->index,
  ])


@endforeach

@footer