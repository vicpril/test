
<div class="issue-links-blog">
	<a href="{{ route('archive') }}/#{{ $article->issue->year }}" class="article-preview-issue-year">{{__('Журнал')}} {{ $article->issue->year }} года</a>
	<span> -> </span>
	<a href="{{ route('articles') }}?year={{ $article->issue->year }}&no={{ $article->issue->no }}&tom={{ $article->issue->tom }}" class="article-preview-issue-tom">№{{ $article->issue->no }}, Том{{ $article->issue->tom }}</a>
</div>