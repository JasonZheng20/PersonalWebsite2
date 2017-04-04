var headerUp= false;
var currIndex = 0;

$(document).ready(function(){
    $('div.large#n').click(function() {
        if (currIndex == 1) {
            $("lo > div").removeClass('mini-blue').addClass('mini');
            $('div#r').addClass('mini-blue');
            currIndex = 2;
        }
        else {
            $("lo > div").removeClass('mini-blue').addClass('mini');
            $('div#c').addClass('mini-blue');
            currIndex = 3;
        }
        $('li').animate({
            left: "-=1682.5px"}, '2000', 'swing');
    });

    $('div.large#p').click(function() {
        if (currIndex == 2) {
            $("lo > div").removeClass('mini-blue').addClass('mini');
            $('div#a').addClass('mini-blue');
            currIndex = 1;
        }
        else {
            $("lo > div").removeClass('mini-blue').addClass('mini');
            $('div#r').addClass('mini-blue');
            currIndex = 2;
        }
        $('li').animate({
            left: "+=1682.5px"}, '2000', 'swing');
    });

    $('div.mini#a').click(function() {
        currIndex = 1;
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
        currIndex = 2;
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
        currIndex = 3;
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
                left: "319.5px",
                }, '2000', 'swing');
        }

    });

});

