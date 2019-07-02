@header


<body lang=RU style='tab-interval:35.4pt'>



<p class=MsoNormal style='text-indent:35.45pt'><b style='mso-bidi-font-weight:
normal'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>СПИСОК E-MAIL'ов<o:p></o:p></span></b></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>{{$title}}<o:p></o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>№ {{$no}} ({{$full_no}}), @if ($no == 1)Январь – Март@elseif ($no == 2)Апрель – Июнь@elseif ($no == 3)Июль – Сентябрь@elseif ($no == 4)Сентябрь – Декабрь@endif
 {{$year}}<o:p></o:p></span></p>


<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>
    
  
@foreach ($users as $user)
    <b><span style='font-size:12.0pt;line-height:115%;
font-family:"Times New Roman","serif";mso-fareast-font-family:"Times New Roman";
color:black;mso-fareast-language:RU'></span></b><span
style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif";
mso-fareast-font-family:"Times New Roman";color:black;mso-fareast-language:
RU'>@if ($user->emailHost != 'localhost.lo') {{$user->email}}@if (!$loop->last), @endif{{''}}@endif
@endforeach


@foreach ($users as $user)
    <p><b><span style='font-size:12.0pt;line-height:115%;
font-family:"Times New Roman","serif";mso-fareast-font-family:"Times New Roman";
color:black;mso-fareast-language:RU'>{{$user->ru->full_name}}</span></b><span
style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif";
mso-fareast-font-family:"Times New Roman";color:black;mso-fareast-language:
RU'>@if ($user->email)@if ($user->emailHost != 'localhost.lo') {{$user->email}}@else<span
style='color: red'> Нет e-mail'a</span>@endif{{''}}@else<span
style='color: red'> Нет e-mail'a</span>@endif</p>

@endforeach

  
@footer