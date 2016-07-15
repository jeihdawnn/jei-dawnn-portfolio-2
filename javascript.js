        
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 2500);
};   
function showPage() {
    document.getElementById("loader").style.display = "none"; document.getElementById("myPage").style.display = "block";
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
    }
    
});
//end of Scrolling Function
});
