<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-white p-0 m-0">
    <li class="breadcrumb-item">
			<a href="{{ route('page', ['pageAlias'=>'archive']) }}#{{ $article->issue->year }}"
				 >@lang('Журнал :year года', [
        'year' => $article->issue->year,
        'fullno' => $article->issue->full_no
    ])</a></li>
    <li class="breadcrumb-item">
			<a href="{{ route('articles', ['year' => $article->issue->year,
            'no' => $article->issue->no,
            'part' => $article->issue->part,
            ]) }}">@lang('№:no, часть :part', [
										'no' => $article->issue->no,
										'part' => $article->issue->part
				])</a>
		</li>
    @isset($cat)
      <li class="breadcrumb-item active" aria-current="page">{{ $article->category->loc }}</li>
    @endif
  </ol>
</nav>