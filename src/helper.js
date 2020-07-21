import TypeIt from "typeit";
import { TimelineMax, Power2 } from "gsap";

export const typing = () => {
    new TypeIt(".element", {
        speed: 50,
        startDelay: 900
      })
        .type("It's so dak in here,", {delay: 100})
        .move(-10, {speed: 50, delay: 100})            
        .type('r')
        .move('END')
        .delete(22, {delay: 600})
        .type("Torry Page Nos Found,", {delay: 100})
        .move(-7, {speed: 50, delay: 100})
        .delete(1)
        .type('t')
        .move('START')
        .move(1, {delay: 200})
        .delete(1)
        .type('S')
        .move('END')
        .delete(21, {delay: 600})
        .type('<em><strong> Error 404.</strong></em>')
        .go();
}

export const typeAbout = () => {
    new TypeIt(".element", {
        speed: 50,
        startDelay: 900
      })
        .type("Do yo know that,", {delay: 300})
        .move(-11, {speed: 40, delay: 100})            
        .type('u')
        .move('END')
        .delete(22, {delay: 600})
        .type(".....", {delay: 300})
        .delete(6, {delay: 600})
        .type("It's more than roundie !", {delay: 300})
        .move(-9, {speed: 40, delay: 100})            
        .type('a ')
        .move('END')                        
        .go();
}

export const navFunc = () => {
       
    var main = document.getElementById('navul');
    var ele = main.getElementsByClassName('error-link');
    for (var i =0; i<ele.length; i++) {
        ele[i].addEventListener("click", function() {
            var mai = document.getElementById('error-li');
            var current = document.getElementsByClassName("acti");
            current[0].className = current[0].className.replace(" acti", "");
            this.className += " acti";
        });
    }
}

export const barCont = () => {
    

    const hamburger = document.querySelector('.hamburger');
    const navb = document.querySelector('.navul');
    const lineOne = hamburger.querySelector('.l-one');
    const lineTwo = hamburger.querySelector('.l-two');
    const lineThree = hamburger.querySelector('.l-three');

    const tlm = new TimelineMax({paused:true, reversed:true});

    tlm
        .to(lineTwo,.125, {scaleX:0, ease: Power2.easeInOut})
        .to(lineOne, .5, {y:8, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "slide")
        .to(lineThree, .5, {y:-6, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "slide")        
        .to(hamburger,.25, {rotation:360, ease:Power2.easeInOut} )
        .to(lineOne, .25, {rotation:45, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross")
        .to(lineThree, .25, {rotation:-45, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross")
        .fromTo(navb, .25,{y:-300, opacity:0, transformOrigin: "50% 50%", ease: Power2.easeInOut}, {y:6, opacity:1, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross");
        
        
    
    hamburger.addEventListener('click', _=>{
        var x = document.getElementById("navul");        
        if (x.className === "navul") {
           
            x.className += " responsive";
           
        } else {
            x.className = "navul";
        }
        tlm.reversed()? tlm.play() :tlm.reverse();
    })

    
}

// var ele = document.getElementById('barIcon');
//     ele.addEventListener('click',function (){
//     ele.classList.toggle('change');
// })

export const meAlert = (value) => {
    alert(value)
}
// barCont = () => {

//     const lt = document.querySelector('.pop-me');
//     const tlm = new TimelineMax();
//     tlm.to('.pop-me',2, {rotation:360, ease:Power2.easeInOut}) 
//     // tlm.reversed()? tlm.play() :tlm.reverse(); 
// }