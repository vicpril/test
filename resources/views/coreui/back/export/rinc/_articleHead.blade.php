
<div class="WordSection1">

<p class="MsoNormal" style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>{{$title}}&nbsp;{{$issn}}<p></p></span></p>

@if ($year >= 2019)
<p class="MsoNormal" style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>{{$year}}, Том {{$tom}}, №{{$no}}, часть {{$part}} @if ($no == 1)Январь – Март@elseif ($no == 2)Апрель – Июнь@elseif ($no == 3)Июль – Сентябрь@elseif ($no == 4)Октябрь – Декабрь@endif
<p></p></span></p>
@else
<p class="MsoNormal" style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>№ {{$no}} ({{$full_no}}), т. {{$part}}, @if ($no == 1)Январь – Март@elseif ($no == 2)Апрель – Июнь@elseif ($no == 3)Июль – Сентябрь@elseif ($no == 4)Октябрь – Декабрь@endif
 {{$year}}<p></p></span></p>
@endif

<p class="MsoNormal" style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>Страницы всего по
        статьям: @if ($firstPage){{$firstPage}}@else<span style="background:red;">&nbsp;&nbsp;</span>@endif-@if ($lastPage){{$lastPage}}@else<span style="background:red;">&nbsp;&nbsp;</span>@endif</span><span style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";
mso-fareast-language:RU'><p></p></span></p>

<p class="MsoNormal" style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><p>&nbsp;</p></span></p>

<p class="MsoNormal" style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><p>&nbsp;</p></span></p>

</div>