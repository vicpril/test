
<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'>Статья {{$index}}<o:p></o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'>Рубрика <span style='text-transform:
uppercase'>{{ $article->category->ru }}</span><o:p></o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'>Стр. @if ($article->firstPage){{$article->firstPage}}@else<span style="background:red;">&nbsp;&nbsp;</span>@endif-@if($article->lastPage){{$article->lastPage}}@else<span style="background:red;">&nbsp;&nbsp;</span>@endif</span><span lang=EN-US
style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-ansi-language:
EN-US;mso-fareast-language:RU'><o:p></o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
@if( !$article->stol )
@if( $article->users )
{{--///////////////Список авторов///////////////--}}

{{-- информацию про институт пока не вывожу, т.к. неясно как это нужно делать в сыязи с отказом от институтов
    
<!-- @if( $article->multy_job == false )
    {{--/////Одно место работы/////--}}}    
            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";mso-fareast-language:RU'>
        @foreach from=$jobs[0].user key=i item=user_id}}
                    {{$users[$user_id].us_last_name}} {{$users[$user_id].us_first_name}}@if( ($users[$user_id].us_first_name|@strlen) - 1 == 1}}.@endif {{$users[$user_id].us_patronymic}}@if( $users[$user_id].us_patronymic|@strlen - 1 == 1}}.@endif@if( $jobs[0].user|@count - 1 > $i}}, @endif
        {{/foreach}}             
            <span style='text-transform:uppercase'><o:p></o:p></span></span></p>


            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";text-transform:uppercase;mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>

            <p class=MsoNormal style='text-indent:0.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span
            class=SpellE><span style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";
            mso-fareast-language:RU'>{{$jobs[0].job_name}} </p><p class=MsoNormal style='text-indent:0.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span
            class=SpellE><span style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";
            mso-fareast-language:RU'>{{$jobs[0].job_adress}}</p>

    @else
        {{--/////Разные места работы/////--}}}    
          
            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><sup><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";mso-fareast-language:RU'></span></sup><span
            style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:
            RU'>{{foreach from=$users key=i item=user}}  
                {{$user.us_last_name}} {{$user.us_first_name}}@if( ($user.us_first_name|@strlen) - 1 == 1}}.@endif {{$user.us_patronymic}}@if( $user.us_patronymic|@strlen - 1 == 1}}.@endif<sup>{{foreach from=$jobs key=k item=job}}@if( $user.job_id == $job.id}}{{$k+1}}@endif{{/foreach}}</sup>@if( ($users|@count - 1) > $user.index}}, @endif
                
        {{/foreach}}
        <span style='text-transform:uppercase'><o:p></o:p></span></span></p>
        
            
            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";text-transform:uppercase;mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
        
            
            
        {{foreach from=$jobs key=i item=job}}
            <p class=MsoNormal style='tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><sup><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";mso-fareast-language:RU'>{{$i+1}}</span></sup><span
            style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:
            RU'>{{$job.job_name}} </p><p class=MsoNormal style='tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><sup></sup><span
            style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:
            RU'>{{$job.job_adress}}<o:p></o:p></span></p>
        {{/foreach}}
            
    @endif
 -->
             конец комментария --}}

    
    {{--///////////////Список email///////////////--}}}

    @if($email_on)
            <span style='mso-bookmark:OLE_LINK2'></span><span style='mso-bookmark:OLE_LINK1'></span>

            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>

            @foreach($article->users as $user)
            @if( $user.emailHost != 'localhost.lo' )
            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";mso-fareast-language:RU'>@if( count($article->users) > 1){{$user->ru->last_name}} @endif{{$user->email}}<o:p></o:p></span></p>
            @endif
        @endforeach
    @endif
            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
@endif
@endif


{{--///////////////  Название  ///////////////--}}}

    <p class=MsoNormal style='text-transform: uppercase; text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
    layout-grid-mode:char'><b style='mso-bidi-font-weight:normal'><span
    style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:
    RU'>{{$article->ru->title}}<o:p></o:p></span></b></p>

    <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
    layout-grid-mode:char'><b style='mso-bidi-font-weight:normal'><span
    style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:
    RU'><o:p>&nbsp;</o:p></span></b></p>

{--///////////////  Аннотация  ///////////////--}}}

<div class=MsoNormal style='margin-top:0.0pt;margin-right:0cm;margin-bottom:
0.0pt; text-indent:1.0cm;mso-hyphenate:none;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'>
<span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU;mso-bidi-font-weight:bold'>
{{$article->ru->annotation}}
<o:p></o:p></span></div>

{{--<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>--}}





{--///////////////  УДК  ///////////////--}}}

@if($article->udk)
<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'>УДК {{$article->udk}}<o:p></o:p></span></p><p>&nbsp;</p>
@endif

{{--///////////////  doi  ///////////////--}}
@if($article->doi) 
<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span class=SpellE><span lang=EN-US style='font-size:
10.0pt;mso-fareast-font-family:"Times New Roman";mso-ansi-language:EN-US;
mso-fareast-language:RU'>DOI</span></span><span style='font-size:10.0pt;
mso-fareast-font-family:"Times New Roman";mso-fareast-language:RU'>: {{$article->doi}}<o:p></o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
@endif
{{--///////////////  keywords  ///////////////--}}
@if( $article->ru->keywords}}
<p class=MsoNormal style='text-indent:1.0cm'><b style='mso-bidi-font-weight:
normal'><i style='mso-bidi-font-style:normal'><span style='font-size:10.0pt;
mso-bidi-font-size:11.0pt'>Ключевые слова: </span></i></b><span
style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>{{$article->ru->keywords}}<o:p></o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm'><span style='font-size:10.0pt;
mso-bidi-font-size:11.0pt'><o:p>&nbsp;</o:p></span></p>
@endif

{{--///////////////  Список литературы  ///////////////--}}
@if( $article->ru->bibliography )
<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><b style='mso-bidi-font-weight:normal'><span
style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";text-transform:
uppercase;mso-fareast-language:RU'>СПИСОК ЛИТЕРАТУРЫ<o:p></o:p></span></b></p>

<div class=MsoNormal style='margin-top:0.0pt;margin-right:0cm;margin-bottom:
0.0pt; text-indent:1.0cm;mso-hyphenate:none;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'>
<span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU;mso-bidi-font-weight:bold'>
{{$article->ru->bibliography}}
<o:p></o:p></span></div>

@endif

{{--///////////////  Финансирование  ///////////////--}}
@if( $article->finance )

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><b style='mso-bidi-font-weight:normal'><span
style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:RU'>Финансирование статьи<o:p></o:p></span></b></p>

<div class=MsoNormal style='margin-top:0.0pt;margin-right:0cm;margin-bottom:
0.0pt; text-indent:1.0cm;mso-hyphenate:none;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'>
<span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU;mso-bidi-font-weight:bold'>
{{$article->finance}}
<o:p></o:p></span></div>
@endif

{{--<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>--}}

{{--///////////////  Дата поступления  ///////////////--}}
@if( $article->date_arrival )
<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'>Дата</span><span style='font-size:
10.0pt;mso-fareast-font-family:"Times New Roman";mso-ansi-language:EN-US;
mso-fareast-language:RU'> </span><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'>поступления статьи в редакцию</span><span lang=EN-US
style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-ansi-language:
EN-US;mso-fareast-language:RU'>: {{$article->date_arrival}}<o:p></o:p></span></p>
@endif

<p class=MsoNormal style='text-indent:1.0cm'><span lang=EN-US style='font-size:
10.0pt;mso-bidi-font-size:11.0pt;mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>


{{--///////////////  Английский  ///////////////--}}

<p class=MsoNormal style='text-indent:1.0cm'><span style='font-size:10.0pt;
mso-bidi-font-size:11.0pt'>Рубрика</span><span style='font-size:10.0pt;
mso-bidi-font-size:11.0pt;mso-ansi-language:EN-US'> <span lang=EN-US style="text-transform: uppercase;">{{$article->category->en}}<o:p></o:p></span></span></p>

<p class=MsoNormal style='text-indent:1.0cm'><span lang=EN-US style='font-size:
10.0pt;mso-bidi-font-size:11.0pt;mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>


{{--///////////////Список авторов EN///////////////--}}
@if( !$article->stol)
@if( $article->users)

    {{--
              
@if( $article->multy_job == false)
{{--/////Одно место работы/////--}}    
        <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
        layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
        "Times New Roman";mso-fareast-language:RU'>
    {foreach from=$jobs[0].user key=i item=user_id}
                {$users[$user_id].us_name_en}} {$users[$user_id].us_initials_en}}@if( $jobs[0].user|@count - 1 > $i}}, @endif
    {/foreach}             
        <span style='text-transform:uppercase'><o:p></o:p></span></span></p>
    
    
        <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
        layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
        "Times New Roman";text-transform:uppercase;mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
@if( $jobs[0].job_name_en}}
        <p class=MsoNormal style='tab-stops:49.6pt 154.5pt;layout-grid-mode:char'><a
        name="OLE_LINK2"></a><a name="OLE_LINK1"><span style='mso-bookmark:OLE_LINK2'></span></a><span
        class=SpellE><span style='mso-bookmark:OLE_LINK1'><span style='mso-bookmark:
        OLE_LINK2'><span style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";
        mso-fareast-language:RU'>{$jobs[0].job_name_en}} </p><p class=MsoNormal style='tab-stops:49.6pt 154.5pt;layout-grid-mode:char'><a
        name="OLE_LINK2"></a><a name="OLE_LINK1"><span style='mso-bookmark:OLE_LINK2'></span></a><span
        class=SpellE><span style='mso-bookmark:OLE_LINK1'><span style='mso-bookmark:
        OLE_LINK2'><span style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";
        mso-fareast-language:RU'>{$jobs[0].job_adress_en}}<o:p></o:p></p>
@endif
        
{else}}
    {{--/////Разные места работы/////--}}   
    
            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><sup><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";mso-fareast-language:RU'></span></sup><span
            style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:
            RU'>{foreach from=$users key=i item=user}  
                <sup>{foreach from=$jobs key=k item=job}{if $user.job_id == $job.id}{$k+1}@endif{/foreach}</sup>{$user.us_name_en} {$user.us_initials_en}{if ($users|@count - 1) > $user.index}, @endif
                
        {/foreach}
        <span style='text-transform:uppercase'><o:p></o:p></span></span></p>
        
            
            <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";text-transform:uppercase;mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
            
        {foreach from=$jobs key=i item=job}
            <p class=MsoNormal style='tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><sup><span style='font-size:10.0pt;mso-fareast-font-family:
            "Times New Roman";mso-fareast-language:RU'>{$i+1}</span></sup><span
            style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:
            RU'>{$job.job_name_en} </p><p class=MsoNormal style='tab-stops:49.6pt 154.5pt;
            layout-grid-mode:char'><sup></sup><span
            style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-language:
            RU'>{$job.job_adress_en}<o:p></o:p></span></p>
        {/foreach}
      
            
            
@endif
@endif
        --}}

{{--///////////////Список email///////////////--}}
@if ($email_on)
{{--{if false}--}}
        <span style='mso-bookmark:OLE_LINK2'></span><span style='mso-bookmark:OLE_LINK1'></span>

        <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
        layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
        "Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
    @foreach($article->users as $user)
        @if ($user.emailHost != 'localhost.lo')
        <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
        layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
        "Times New Roman";mso-fareast-language:RU'>@if(count($article->users) > 1}{{$user->en->last_name}} @endif{{$user->email}}<o:p></o:p></span></p>
        @endif
    @endforeach
@endif
        <p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
        layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
        "Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>

@endif
        
{{--/////////////// Title EN///////////////--}}

<p class=MsoNormal style='text-transform: uppercase; text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><b style='mso-bidi-font-weight:normal'><span lang=EN-US
style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-ansi-language:
EN-US;mso-fareast-language:RU'>{{$article->en->title}}<o:p></o:p></span></b></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";text-transform:uppercase;mso-ansi-language:EN-US;mso-fareast-language:
RU'><o:p>&nbsp;</o:p></span></p>

<div class=MsoNormal style='text-indent:1.0cm;mso-hyphenate:none'><span
lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";
mso-ansi-language:EN-US;mso-fareast-language:RU'>{{$article->en->annotation}}<o:p></o:p></span></div>


{{--<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-ansi-language:EN-US;mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
--}}

@if ($article->en->keywords)
<p class=MsoNormal style='text-indent:1.0cm'><b style='mso-bidi-font-weight:
normal'><i style='mso-bidi-font-style:normal'><span lang=EN-US
style='font-size:10.0pt;mso-bidi-font-size:11.0pt;mso-ansi-language:EN-US'>Keywords:
</span></i></b><span lang=EN-US style='font-size:10.0pt;mso-ansi-language:EN-US'>{{$article->en->keywords}}<o:p></o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm'><span lang=EN-US style='font-size:
10.0pt;mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>
@endif

<p class=MsoNormal style='text-indent:1.0cm'><span lang=EN-US style='font-size:
10.0pt;mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>



{{--/////////////// ОСНОВНОЙ ТЕКСТ СТАТЬИ///////////////--}}

<p class=MsoNormal style='text-indent:1.0cm'><b style='mso-bidi-font-weight:
normal'><span style='font-size:10.0pt'>ОСНОВНОЙ ТЕКСТ СТАТЬИ<o:p></o:p></span></b></p>

<p class=MsoNormal style='text-indent:1.0cm'><span style='font-size:10.0pt;
mso-fareast-font-family:"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>

<div class=MsoNormal style='text-indent:1.0cm;mso-hyphenate:none'><span
lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";
mso-ansi-language:EN-US;mso-fareast-language:RU'>{{$article->ru->text}}<o:p></o:p></span></div>


<p class=MsoNormal style='text-indent:1.0cm'><span style='font-size:10.0pt'><o:p>&nbsp;</o:p></span></p>




<span style='font-size:11.0pt;line-height:115%;
font-family:"Times New Roman","serif;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;
mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;
mso-ansi-language:RU;mso-fareast-language:EN-US;mso-bidi-language:AR-SA'><br
clear=all style='mso-special-character:line-break;page-break-before:always'>
</span>