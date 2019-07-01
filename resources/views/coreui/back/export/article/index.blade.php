@header

@articleHead

@foreach($articles as $article)

@body([
    'article' => $article,
    'index' => $loop->index,
  ])

@endforeach

@footer