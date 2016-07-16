var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 2500);
};   
function showPage() {   
    document.getElementById("loader").style.display = "none"; document.getElementById("myPage").style.display = "block";
};



function myFun(){
        $(".side-navigation").fadeToggle();
        $(".bar1").toggleClass("invisible");
        $(".bar3").toggleClass("invisible");
};

if ($(window).height() >= 1020) {
        $('.side-navigation').css('display','none');
    };
$(document).ready(function(){
//Navigation
    
//Scrolling
$(window).scroll(function(){
    var wScroll = $(document).scrollTop();
    if (wScroll > $('.about-bg').offset().top - ($(window).height() / 1.2)) {
        $(".left").each(function(i){
            setTimeout(function(){
            $(".left").eq(i).addClass("animated-left show");}, (700 * (Math.exp(i * 0.14))) - 700); 
        });
        $(".right").each(function(i){
            setTimeout(function(){
            $(".right").eq(i).addClass("animated-right show");}, (700 * (Math.exp(i * 0.14))) - 700); 
        });
        $(".about-bg img").addClass("animated-scale");
    };
    
    if (wScroll > $('.about').offset().top - ($(window).height() / 1.2)) {
        $("#aboutme").fadeIn(400);
    };
    
    
    if (wScroll > 300 && wScroll < 600) {
        $(".scroll").fadeOut(700);
    } else {
        $(".scroll").fadeIn(700);
    };
    
    if (wScroll > $('.description').offset().top - ($(window).height() / 1)) {
        $(".character").fadeIn(2000);
    };
    
    if (wScroll > $('.available').offset().top - ($(window).height() / 1.2)) {
        $('.available').addClass('w3-animate-left');
    };
    if (wScroll > $('.extra-text').offset().top - ($(window).height() / 1.2)) {
        $('.extra-text').addClass('w3-animate-right');
    };
    if (wScroll > $('#end-logo').offset().top - ($(window).height() / 1.2)) {
        $('#end-logo').addClass('w3-animate-bottom');
    };
});
//end of Scrolling Function
});
