@if($issue)
Идеи и Идеалы №{{ $issue->no }} ({{ $issue->full_no }}), {{ $issue->year }} г. Том:{{ $issue->part }} | 
      @if($issue->part == 1)
         <a class="article-title-part-link" href="{{ route('articles', ['year' => $issue->year,
            'no' => $issue->no,
            'part' => 2,
            ]) }}">2</a>
      @else
         <a class="article-title-part-link" href="{{ route('articles', ['year' => $issue->year,
            'no' => $issue->no,
            'part' => 1,
            ]) }}">1</a>
      @endif
@endif