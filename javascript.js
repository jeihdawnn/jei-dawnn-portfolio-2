
        
function w3_open() {     
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("opennav").style.visibility = "hidden";
    };

function w3_close() {
    document.getElementById("mySidenav").style.display= "none";
    document.getElementById("opennav").style.visibility = "visible";
    };
        
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
    };   

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myPage").style.display = "block";
    };
