<div class=WordSection1>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>{$title}&nbsp;{$issn}<o:p></o:p></span></p>

{if $yarno >= 2019}
<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>{$yarno}, Том {$vol}, №{$no}, часть {$tom} {if $no == 1}Январь – Март{elseif $no == 2}Апрель – Июнь{elseif $no == 3}Июль – Сентябрь{elseif $no == 4}Октябрь – Декабрь{/if}
<o:p></o:p></span></p>
{else}
<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>№ {$no} ({$f_no}), т. {$tom}, {if $no == 1}Январь – Март{elseif $no == 2}Апрель – Июнь{elseif $no == 3}Июль – Сентябрь{elseif $no == 4}Октябрь – Декабрь{/if}
 {$yarno}<o:p></o:p></span></p>
{/if}

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt'>Страницы всего по
        статьям: {if $f_page}{$f_page}{else}<span style="background:red;">&nbsp;&nbsp;</span>{/if}-{if $l_page}{$l_page}{else}<span style="background:red;">&nbsp;&nbsp;</span>{/if}</span><span style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";
mso-fareast-language:RU'><o:p></o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='text-indent:1.0cm;tab-stops:49.6pt 154.5pt;
layout-grid-mode:char'><span style='font-size:10.0pt;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:RU'><o:p>&nbsp;</o:p></span></p>

</div>