function scramblermain(){
  $(document).ready(function(){
    var $scramble = $("#small")
    $scramble.scramble(3000,20,"alphabet",true)
})
}
scramblermain()

function scrambler(){
    var tl = gsap.timeline();
tl.to("#loadermain", {
  opacity: 0,
  delay: 3.2,
  onStart:numbered()
})
  .to("#loadermain", {
    // y: "-100%",
    opacity: 0,
    duration: 1.9,
    ease: "Expo.easeInOut",
    
  })
  .to(
    "#loadermain",
    {
      y: "-100%",
      // opacity:0,
      duration: 2,
      
      // ease: "Expo.easeInOut"
    },
    "up"
  )
}
scrambler()

const navslide=()=>{
  const burger = document.querySelector(".burger")
  const nav =  document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")
  
  burger.addEventListener("click",()=>{
    nav.classList.toggle('nav-active')

    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation ="";
      }
      else{
        link.style.animation = `navLinkfade 0.5s ease forwards ${index / 7+ 0.8}s`;
      }
     
    })
    burger.classList.toggle("toggle")
  })

}
navslide()

// const harsh=()=>{
//   Shery.mouseFollower({
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 0.5,
//   });
// }
// harsh()

function numbered(){
 
  var a= 0
  setInterval(()=>{
    a+=Math.floor(Math.random()*10)
   if(a<100){
    document.querySelector("#percentage h1").innerHTML = a+"%"
   }
   else{
    a=100
    document.querySelector("#percentage h1").innerHTML = a+"%"
   }
  },123)
  

}

function anim(){
  var tl  = gsap.timeline()

/////nav bar animation 
tl.from(".logos",{
  y:20,
  opacity:0,
  duration:0.5,
  delay:4,
  ease:"power2.out"
},"nav")

tl.from(".nav-links li",{
 y:20,
 opacity:0,
 duration:0.5,
 delay:4,
 ease:"power2.out"
},"nav")


//////page1 animation



tl.from("#leftcontent span",{
  x:-500,
  opacity:0,
  duration:0.3,
  delay:0.3,
  ease:"power2.out",
 })

 tl.from("#leftcontent h1",{
  x:-500,
  opacity:0,
  duration:0.3,
  delay:0.1,
  ease:"power2.in",
 })

 tl.from("#leftcontent p",{
  x:-500,
  opacity:0,
  duration:0.3,
  delay:0,
  ease:"power2.in",
 })

 tl.from("#leftcontent #see",{
  x:-500,
  opacity:0,
  duration:0.3,
  delay:0,
  ease:"power2.in",
 },"see")

 tl.from("#leftcontent #icon",{
  x:-500,
  opacity:0,
  duration:0.3,
  delay:0,
  ease:"power2.in",
 },"see")



 tl.from("#rightcontent",{
  x:500,
  opacity:0,
  duration:0.5,
  delay:0,
  ease:"power2.in",
 })
}
anim()

function scroll2(){
  var p1 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      start:"top 70%",
      end:"top 5%",
      // markers:true,
      scrub:2
    }
  })
  
  
    p1.from("#s1",{
      y:100,
      opacity:0,
      duration:1,
      delay:1,
      stagger:0.4,
      pin:true,
      ease:"power2.in"
     
    },"s1")
    p1.from("#s2",{
      y:100,
      opacity:0,
      duration:1,
      delay:1,
      stagger:0.4,
      pin:true,
      ease:"power2.in"
     
    },"s1")

    p1.from("#page2left",{
      x:-500,
      opacity:0,
      duration:1.5,
      delay:1.5,
      ease:"circ.out",
    },"circle")
    p1.from("#page2right",{
      x:500,
      opacity:0,
      duration:1.5,
      delay:1.5,
      ease:"circ.out",
    },"circle")



}
scroll2()

function scroll3(){

   var p3 = gsap.timeline({
    scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 70%",
    end:"top 10%",
    scrub:2,
   }})

   p3.from("#st1,#st2",{
      opacity:0,
      scale:0.6,
      ease:"expo.out"
   })
}
scroll3()


function scroll4(){
  

  var p4 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      start:"top 70%",
      end:"top 10%",
      scrub:2,
    }
  })


  p4.from("#str1,#str2",{
    opacity:0,
    scale:0.6,
    ease:"expo.out"
  })

  p4.from("#arun",{
    opacity:0,
    x:-500,
    scale:0.6,
    ease:"circ.out"
  })
  p4.from("#name",{
    opacity:0,
    y:35,
    delay:1,
    scale:0.5,
    ease:"circ.out"
  })


}
scroll4()

function button(){
   
  var btn = gsap.timeline()

  var btnanim = document.querySelector("#hireme")
  var text = document.querySelector("#hiremebtn")
  btnanim.addEventListener("mouseenter",()=>{
    btnanim.style.backgroundColor = "black"
  })
  btnanim.addEventListener("mouseleave",()=>{
    btnanim.style.backgroundColor = "white"
  })
  text.addEventListener("mouseenter",()=>{
    text.style.color = "white"
  })
  text.addEventListener("mouseleave",()=>{
    text.style.color = "#5924ED"
  })


}
button()

function sheryjs(){
  Shery.hoverWithMediaCircle("#icon" /* Element to target.*/, {/*OR*/
    videos: ["../arun/videos/seevideo.mp43 - Made with Clipchamp.mp4"],
  });
}
sheryjs()


function mouseCursor(){
  var cursor = document.querySelector("#circle");
  window.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
      x:dets.clientX-4,
      y:dets.clientY-5,
      duration:0.2
    })
  })
}
mouseCursor()


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
