var tl = gsap.timeline();

tl.from(".navbar", {y:-200,})

gsap.from(".navimg",{width:0, duration:1})

tl.from(".middle",{width:0, duration:1.5})

tl.from('.content',{y:600,duration:1, delay:1},"-=2")


document.querySelector("#cross").addEventListener("click", function(){
    document.querySelector(".menu").style.transform = "translate(200%)"

});


document.querySelector("#menubar").addEventListener("click", function(){
    document.querySelector(".menu").style.transform = "translate(50%)"

});


$('.texti').textillate({ in: {effect: 'fadeIn', delay:110, duration:5}});


