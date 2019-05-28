@include('header');

@foreach($articles as $article)

  @include('article', ['article' => $article])

@endforeach