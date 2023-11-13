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


  function conanim(){
    var tl  = gsap.timeline()
  
  /////nav bar animation 
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


  tl.from("#s1c",{
    x:-800,
    opacity:0,
    duration:0.1,
    delay:0.2
  })
  tl.from("#s2c",{
    x:-800,
    opacity:0,
    duration:0.1,
    delay:0.2
  })
  tl.from("#content h1",{
    x:-800,
    opacity:0,
    duration:0.1,
    delay:0.2
  })
  tl.from("#content h4",{
    x:-800,
    opacity:0,
    duration:0.1,
    delay:0.2
  })
  tl.from("#content p",{
    x:-800,
    opacity:0,
    duration:0.1,
    delay:0.2
  })
  tl.from("#contentbtm",{
    x:-800,
    opacity:0,
    duration:0.1,
    delay:0.2
  })
  tl.from("#social",{
    x:-800,
    opacity:0,
    duration:0.1,
    delay:0.2
  })

  tl.from("#rdiv",{
    x:800,
    opacity:0,
    duration:0.1,
    delay:0.1,
    ease:"power2.out"
  })
}
conanim()