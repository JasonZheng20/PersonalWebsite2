$(document).ready(function(){
    $('lo#a').click(function() {
        $('ul.nav').animate({
            height: "125px",
            marginTop: "0px",
        }, '500', 'swing', function(){
            $('li').animate({
                left: "3682.5px",
                }, '2000', 'swing');
        });
    });

    $('lo#r').click(function() {
        $('ul.nav').animate({
            height: "125px",
            marginTop: "0px",
        }, '500', 'swing', function(){
            $('li').animate({
                left: "2000px",
                }, '2000', 'swing');
        });
    });

    $('lo#c').click(function() {
        $('ul.nav').animate({
            height: "125px",
            marginTop: "0px",
        }, '500', 'swing', function(){
            $('li').animate({
                left: "320px",
                }, '2000', 'swing');
        });
    });

});
