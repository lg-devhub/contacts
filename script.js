var one = document.getElementById('one');
var two = document.getElementById('two');
var four = document.getElementById('four');
var oneo = document.getElementById('oneo');
var twot = document.getElementById('twot');
var fourf = document.getElementById('fourf');

one.addEventListener("mouseover", function(){
    oneo.style.color = "#ff2d75";
    oneo.style.transition = "0.4s";
    one.style.transform = "scale(1.1)";
    one.style.transition = "0.4s";
});

one.addEventListener("mouseout", function(){
    oneo.style.color = "white";
    oneo.style.transition = "0.4s";
    one.style.transform = "scale(1.0)";
    one.style.transition = "0.3s";
});



two.addEventListener("mouseover", function(){
    twot.style.color = "#ff2d75";
    twot.style.transition = "0.4s";
    two.style.transform = "scale(1.1)";
    two.style.transition = "0.4s";
});

two.addEventListener("mouseout", function(){
    twot.style.color = "white";
    twot.style.transition = "0.4s";
    two.style.transform = "scale(1.0)";
    two.style.transition = "0.3s";
});





four.addEventListener("mouseover", function(){
    fourf.style.color = "#ff2d75";
    fourf.style.transition = "0.4s";
    four.style.transform = "scale(1.1)";
    four.style.transition = "0.4s";
});

four.addEventListener("mouseout", function(){
    fourf.style.color = "white";
    fourf.style.transition = "0.4s";
    four.style.transform = "scale(1.0)";
    four.style.transition = "0.3s";
});
