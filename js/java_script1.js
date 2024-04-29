//Voy a decirle a javaScript qeu se ejecuta uan vez que se haya cargador todo el documeto HTML
$(document).ready(function(){

    //Efecto menú

    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'-10'
        }, 2000 + (index * 500));
    });

    $('.ikon img').each(function(index,elemento){
        $(this).css({
            'top':'-150px'
        });
        $(this).animate({
            top:'0'
        }, 1000);
    });

    if($(window).width()>800){
        $('header .texto').css({
            opacity:0,
            marginTop:50
        });
        $('header .texto').animate({
            opacity:1,
            marginTop:'0px'
        }, 1500);
    }
})