/*eslint-env jquery*/
/*global  $, window*/
$("span:even").css('color', 'red');
var paragraphs = $('p');
paragraphs.each(function (index, element) {
    "use strict";
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});
$("button").click(function () {
    "use strict";
	window.alert($(this).attr("data-tmp"));
});