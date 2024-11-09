// * imagem_automatica > index.html > id="my-html"
var link = document.getElementById('my-html');
for(var i = 0; i < 50; i++)
   link.click();


var timer;
$(document).on('mousemove', function() {
    clearTimeout(timer);

    timer = setTimeout(function() {
        logout();
    }, 15000); //* 15s
});