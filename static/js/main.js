$(document).ready(function(){
    $('div.mini#a').click(function() { //on first click, decrease the top y position
        $(this).css("color", "#1ac6ff");
        $('div.mini#r').css("color", "#000");
        $('div.mini#c').css("color", "#000");
        $('ul.nav').animate({
            height: "125px",
            marginTop: "0px",
        }, '500', 'swing', function(){
            $('li').animate({
                left: "3682.5px",
                }, '2000', 'swing');
        });
    });

    $('div.mini#r').click(function() {
        $(this).css("color", "#1ac6ff");
        $('div.mini#a').css("color", "#000");
        $('div.mini#c').css("color", "#000");
        $('ul.nav').animate({
            height: "125px",
            marginTop: "0px",
        }, '500', 'swing', function(){
            $('li').animate({
                left: "2000px",
                }, '2000', 'swing');
        });
    });

    $('div.mini#c').click(function() {
        $(this).css("color", "#1ac6ff");
        $('div.mini#a').css("color", "#000");
        $('div.mini#r').css("color", "#000"); 
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


/* $('.header').animate({
 *  y position: "0px" }, '800', 'swing', function() {next function});
 *
 *
 */
