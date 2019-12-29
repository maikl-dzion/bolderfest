function lg(arr) {

    var result = '---NOT ARRAY---';
    if (arr) result = _printf(arr); // --- формируем строку из массива
    _openWindow(result);            // --- показываем результат в новом окне

    // --- формируем строку из массива
    function _printf(arr) {
        var strResult = '', deLimiter = ' => ';
        var typeObj = typeof (arr);
        if (typeObj == 'object') {
            for (var i in arr) {

                var values = arr[i];
                var subValues = '';
                var li = deLimiter;
                if (typeof (values) == 'object') {
                    subValues = _printf(values);
                } else {
                    li += values;
                }

                strResult += '<li>[' + i + ']' + li + '</li>' + subValues;
            }
        }
        else strResult = '<li>' + arr + '</li>';

        return '<ul>' + strResult + '</ul>';
    }

    // --- показываем результат в новом окне
    function _openWindow(result, href) {
        var modal = window.open('', '', 'scrollbars=1');
        var style = 'button { padding:10px; margin:10px; border:0px grey solid; width:30%; cursor:ponter  }'
            + ' .lg-view-result { border:2px red solid; }';
        var html = '<!DOCTYPE html><head><style>' + style + '</style><head>'
            + '<p><button onclick="window.close();" >Close</button></p><hr>'
            + '<p class="lg-view-result" ><pre>' + result + '</pre></p>';
        modal.document.body.innerHTML = html;
    }
}


// document.cookie = 'maikl=admin';

// function setCookie( name, value, exp_y, exp_m, exp_d, path, domain, secure )
// {
//   var cookie_string = name + "=" + escape ( value );
 
//   if ( exp_y )
//   {
//     var expires = new Date ( exp_y, exp_m, exp_d );
//     cookie_string += "; expires=" + expires.toGMTString();
//   }
 
//   if ( path )
//         cookie_string += "; path=" + escape ( path );
 
//   if ( domain )
//         cookie_string += "; domain=" + escape ( domain );
  
//   if ( secure )
//         cookie_string += "; secure";
  
//   document.cookie = cookie_string;
// }

// // setCookie("username", "Вася Пупкин");