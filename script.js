document.addEventListener('DOMContentLoaded',()=>{

  // clickable things -->

let navBenefit = document.querySelector('#navBenefit');
let navScrollPoint = document.querySelector('#section4');

navBenefit.addEventListener('click',()=>{
    navScrollPoint.scrollIntoView({
    behavior:"smooth",
    inline:"end"
    })
})

let navTestimonials = document.querySelector('#navTestimonials');

navTestimonials.addEventListener('click',()=>{
  document.querySelector('.section5').scrollIntoView({
    behavior:"smooth",
    inline:'end'
  })
})

let navContact = document.querySelector('#navContact');
navContact.addEventListener('click',()=>{
  window.location.href = "contact.html";
})

let CTAButton = document.querySelector('.CTA-button');
CTAButton.addEventListener('click',()=>{
  window.location.href = "contact.html";
}) 

let heroBtn = document.querySelector('.Hero-button');
heroBtn.addEventListener('click',()=>{
  window.location.href = 'contact.html';
})

// end -->



const track = document.querySelector('.scroll-track');

track.innerHTML += track.innerHTML;

gsap.to(track,{
    x:'-50%',
    duration:22,
    ease:'linear',
    repeat:-1
})



// animations


// for mobile screen

let mobile = gsap.matchMedia();
mobile.add('(max-width:799px)',()=>{
let menu = document.querySelector('#menu');
let close = document.querySelector('#close');
  let tl = gsap.timeline();


tl.to(".navItems",{
  x:"100vw",
  duration:0.7
})


tl.from(".items",{
  x:30,
  stagger:0.2,
  opacity:0
})



  tl.pause();
  menu.addEventListener('click',()=>{
    tl.play();
  })

  close.addEventListener('click',()=>{
    tl.reverse();
  })

  let tl2 = gsap.timeline();
  tl2.from('.bullet',{
    x:20,
    stagger:0.4,
    opacity:0
  })


return ()=>{
  tl2.kill();
  tl.kill();
}


})








// for windows/ mac/ desktop

let winScreen = gsap.matchMedia();

winScreen.add('(min-width: 800px)',()=>{

let tl1 = gsap.timeline();

tl1.from('.bullet',{
x:50,
stagger:0.4,
opacity:0
})

tl1.from('.valueDiv',{
  y:60,
  stagger:0.4,
   scrollTrigger:{
    scroller:'body',
    trigger:'.valueDiv',
    scrub:2,
    start:"top 95%",
    end:'top 70%'
  }
})

tl1.from('.Value-Stackp',{
  x:100,
  stagger:0.3,
  scrollTrigger:{
    scroller:'body',
    trigger:'.Value-Stackp',
    scrub:2,
    start:"top 100%",
    end:'top 80%'
  }
})

let valueDiv = document.querySelectorAll('.valueDiv');
valueDiv.forEach(div => {
     div.addEventListener('mouseenter',()=>{
    gsap.to(div,{
      y:20,
      duration:0.3,
      ease:"power2.out"
    })
})
 div.addEventListener('mouseleave',()=>{
    gsap.to(div,{
      y:0,
      ease:"power2.out"
    })
})
});

return ()=>{
  tl1.kill();
}

})










})