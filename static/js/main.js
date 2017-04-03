var currentIndex = 0;
$(document).ready(function(){
    $('lo').click(function() {
        $('ul.nav').animate({
            height: "125px",
            marginTop: "0px",
        }, '500', 'swing', function(){
            $('li').animate({
                left: "3682.5px",
                }, '1000', 'swing');
        });
    });
});
