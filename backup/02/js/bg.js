$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', 'http://4.bp.blogspot.com/-3YtwFdb01YI/TnCNSc1c93I/AAAAAAAAA5c/V6g_3ghlw30/s1600/Background+13.jpg').load(function(){
        $('body').append($(this));
    });
    
    $('#fb').hover(function() {
        $('body').css('background-image', 'url("http://4.bp.blogspot.com/-3YtwFdb01YI/TnCNSc1c93I/AAAAAAAAA5c/V6g_3ghlw30/s1600/Background+13.jpg")');
    }, function() {
        $('body').css('background', '');
    });
});