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

function skilliy(){
    var tl = gsap.timeline()


tl.from(".logos",{
    y:20,
    opacity:0,
    duration:0.5,
    delay:0.8,
    ease:"power2.out"
  },"nav")
  
  tl.from(".nav-links li",{
   y:20,
   opacity:0,
   duration:0.5,
   delay:0.8,
   ease:"power2.out"
  },"nav")

tl.from("#slide",{
    opacity:0,
    scale:0,
    duration:0.5,
    delay:0,
    ease:"power2.in",
})
tl.from("#imagecontainer",{
    x:800,
    opacity:0,
    scale:1,
    duration:0.5,
    delay:0,
    ease:"power2.in",
})

tl.from("#imgcon img",{
    opacity:0,
    scale:2,
    duration:0.5,
    delay:0,
    ease:"power2.in",
},"lo")
tl.from("#icones",{
    opacity:0,
    scale:2,
    duration:0.5,
    delay:0,
    ease:"power2.in",

},"lo")

tl.from("#imgcon h5",{
    opacity:0,
    scale:2,
    duration:0.5,
    delay:0,
    ease:"power2.in",
},"lo")


}
skilliy()

