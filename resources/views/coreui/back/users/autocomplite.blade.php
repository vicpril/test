<script type="text/javascript">
$( document ).ready(function() {

  (function( $ ) {

    function tranaslat(title) {
                gost1 = {
                    "Є": "EH", "І": "I", "і": "i", "№": "#", "є": "eh",
                    "А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D",
                    "Е": "E", "Ё": "JO", "Ж": "ZH",
                    "З": "Z", "И": "I", "Й": "JJ", "К": "K", "Л": "L",
                    "М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R",
                    "С": "S", "Т": "T", "У": "U", "Ф": "F", "Х": "KH",
                    "Ц": "C", "Ч": "CH", "Ш": "Sh", "Щ": "Shh", "Ъ": "'",
                    "Ы": "Y", "Ь": "", "Э": "EH", "Ю": "YU", "Я": "YA",
                    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d",
                    "е": "e", "ё": "jo", "ж": "zh",
                    "з": "z", "и": "i", "й": "jj", "к": "k", "л": "l",
                    "м": "m", "н": "n", "о": "o", "п": "p", "р": "r",
                    "с": "s", "т": "t", "у": "u", "ф": "f", "х": "kh",
                    "ц": "c", "ч": "ch", "ш": "sh", "щ": "shh", "ъ": "",
                    "ы": "y", "ь": "", "э": "eh", "ю": "yu", "я": "ya", "«": "", "»": "", "—": "-"
                };
                return strtr(title.toString(), gost1);
            };


            function strtr(string, dictionary) {
                return string.replace(/[\s\S]/g, function (x) {
                    if (dictionary.hasOwnProperty(x)) {
                        return dictionary[ x ];
                    }
                    return x;
                });
            };

  autocomplite_fields = function(name) {
            var f_name, l_name, pat, ini;
            email_field = $('input[name="email"]');
            alias_field = $('input[name="alias"]');

            alias_field.val(strtr(tranaslat(name.toString().toLowerCase()), {" ": "-", ".": "-"}));
            email_field.val(strtr(tranaslat(name.toString().toLowerCase()), {" ": "-", ".": "-"}) + '@localhost.lo');

            firstname_ru_field = $('input[name="first_name_ru"]');
            lastname_ru_field = $('input[name="last_name_ru"]');
            patronymic_ru_field = $('input[name="patronymic_ru"]');
            initials_ru_field = $('input[name="initials_ru"]');

            firstname_en_field = $('input[name="first_name_en"]');
            lastname_en_field = $('input[name="last_name_en"]');
            patronymic_en_field = $('input[name="patronymic_en"]');
            initials_en_field = $('input[name="initials_en"]');

            name = name.split(' ', 3);
            switch (name.length) {
                case 1:
                    l_name = name[0];
                    break;
                case 2:
                    l_name = name[0];
                    name[1] = name[1].split('.');
                    if (name[1].length == 1) {
                        f_name = name[1][0];
                        ini = (f_name.split(''))[0] + '.';
                    } else {
                        f_name = name[1][0];
                        pat = name[1][1];
                        ini = (f_name.split(''))[0] + '.' + (pat.split(''))[0] + '.';
                    }
                    break;
                case 3:
                    l_name = name[0];
                    f_name = name[1];
                    pat = name[2];
                    ini = (f_name.split(''))[0] + '.' + (pat.split(''))[0] + '.';
                    break;
            }

            if (f_name) {
                firstname_ru_field.val(f_name);
                firstname_en_field.val(tranaslat(f_name));
            } else {
                firstname_ru_field.val('');
                firstname_en_field.val('');
            }

            if (l_name) {
                lastname_ru_field.val(l_name);
                lastname_en_field.val(tranaslat(l_name));
            } else {
                lastname_ru_field.val('');
                lastname_en_field.val('');
            }

            if (pat) {
                patronymic_ru_field.val(pat);
                patronymic_en_field.val(tranaslat(pat));
            } else {
                patronymic_ru_field.val('');
                patronymic_en_field.val('');
            }
            if (ini) {
                initials_ru_field.val(ini);
                initials_en_field.val(tranaslat(ini));
            } else {
                initials_ru_field.val('');
                initials_en_field.val('');
            }

        }

        

    })( jQuery );

});
</script>
