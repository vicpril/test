@header

@articleHead

@foreach($articles as $article)

  @article(['article' => $article])

@endforeach

@footer