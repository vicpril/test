

{{--/////категории////////--}}
@foreach ($articles as $article)
    @if( $loop->first || $article->categories[0]->title_ru !== $articles[$loop->index - 1]->categories[0]->title_ru ) 

      @if (($article->categories[0]->title_ru != 'Без рубрики') && ($article->categories[0]->title_ru != 'От автора') && ($article->categories[0]->title_ru != 'От редактора'))<p class=MsoNormal style='text-align:justify'><b style='mso-bidi-font-weight:
      normal'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>{{$article->categories[0]->title_ru}}<o:p></o:p></span></b></p>@endif

    @endif
    
        
        {{--///////посты////////--}}
            <p class=MsoNormal style='text-align:justify'>
            
                    @if (!$article->stol)
                        {{--///////авторы////////--}}
                        @if ( count($article->users) > 0 )
                        <b style='mso-bidi-font-weight: normal'>
                            <span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>
                          @foreach ($article->users as $user)
                            @if (strlen($user->ru->initials) < 4){{$user->ru->first_name}} @else{{$user->ru->initials}} @endif {{$user->ru->last_name}}@if($loop->last). @else, @endif
                          @endforeach     
                        </span></b>
                        @endif
                    @endif
                                        
            <span class="" style='font-size:12.0pt;line-height:115%;
                    font-family:"Times New Roman","serif"'>{{$article->ru->title}}@if($article->ru->title == 'От редактора') || ($article->ru->title == 'От автора')) [1 том]@endif<o:p></o:p></span></p>

@endforeach




<p class=MsoNormal style='text-align:justify'><b style='mso-bidi-font-weight:
normal'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>Наши
авторы<o:p></o:p></span></b></p>
@if ($part == 2)
<p class=MsoNormal style='text-align:justify'><b style='mso-bidi-font-weight:
normal'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>Информация
для авторов [2 том<a name="_GoBack"></a>]<o:p></o:p></span></b></p>
@endif

<p class=MsoNormal style='text-indent:1.0cm'><span style='font-size:10.0pt'><o:p>&nbsp;</o:p></span></p>


<span style='font-size:11.0pt;line-height:115%;
font-family:"Times New Roman","serif;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;
mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;
mso-ansi-language:RU;mso-fareast-language:EN-US;mso-bidi-language:AR-SA'><br
clear=all style='mso-special-character:line-break;page-break-before:always'>
</span>
