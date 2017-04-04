var headerUp= false;

$(document).ready(function(){
    $('div.mini#a').click(function() {
        $("lo > div").removeClass('mini-blue').addClass('mini');
        $(this).addClass('mini-blue');
        if (!headerUp) {
        $('.header').animate({ marginTop: "0px"}, '75', 'swing', function() {
            $('ul.nav').animate({
                height: "125px",
                marginTop: "0px",
            }, '50', 'swing', function(){
                $('li').animate({
                    left: "3682.5px",
                    }, '2000', 'swing');
            });
        });
        headerUp=true;
        }
        else {
            $('li').animate({
                left: "3682.5px",
                }, '2000', 'swing');
        }
    });

    $('div.mini#r').click(function() {
        $("lo > div").removeClass('mini-blue').addClass('mini');
        $(this).addClass('mini-blue');
        if (!headerUp) {
        $('.header').animate({ marginTop: "0px"}, '75', 'swing', function() {
            $('ul.nav').animate({
                height: "125px",
                marginTop: "0px",
            }, '50', 'swing', function(){
                $('li').animate({
                    left: "2000px",
                    }, '2000', 'swing');
            });
        });
        headerUp=true;
        }
        else {
            $('li').animate({
                left: "2000px",
                }, '2000', 'swing');
        }
    });

    $('div.mini#c').click(function() {
        $("lo > div").removeClass('mini-blue').addClass('mini');
        $(this).addClass('mini-blue');
        if (!headerUp) {
        $('.header').animate({ marginTop: "0px"}, '75', 'swing', function() {
            $('ul.nav').animate({
                height: "125px",
                marginTop: "0px",
            }, '50', 'swing', function(){
                $('li').animate({
                    left: "320px",
                    }, '2000', 'swing');
            });
        });
        headerUp=true;
        }
        else {
            $('li').animate({
                left: "320px",
                }, '2000', 'swing');
        }

    });

});

