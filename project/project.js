function anim(){
  window.addEventListener("mousemove", function(chahcha){
    document.querySelector("#slidephoto").style.top=`${chahcha.clientY}px`
    document.querySelector("#slidephoto").style.left=`${chahcha.clientX}px`
    document.querySelector("#slidephoto").style.transform =`translate(${chahcha.clientX*0.25}px, ${chahcha.clientY*0.45}px)`
  });
  
  document.querySelector("#chainn")
  .addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "0%"
    document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
  })
  
  document.querySelector("#chainn")
  .addEventListener("mouseleave", function(){
    document.querySelector("#chainn").style.color = "initial"
  })
  
  document.querySelector("#aty")
  .addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-100%"
    document.querySelector("#aty").style.color = "rgb(177, 177, 177)"
  })
  
  document.querySelector("#aty")
  .addEventListener("mouseleave", function(){
    document.querySelector("#aty").style.color = "initial"
  })
  
  document.querySelector("#mic")
  .addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-200%"
    document.querySelector("#mic").style.color = "rgb(177, 177, 177)"
  })
  
  document.querySelector("#mic")
  .addEventListener("mouseleave", function(){
    document.querySelector("#mic").style.color = "initial"
  })
  
  document.querySelector("#tapso")
  .addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-300%"
    document.querySelector("#tapso").style.color = "rgb(177, 177, 177)"
  })
  
  document.querySelector("#tapso")
  .addEventListener("mouseleave", function(){
    document.querySelector("#tapso").style.color = "initial"
  })

  document.querySelector("#fanta")
  .addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-400%"
    document.querySelector("#fanta").style.color = "rgb(177, 177, 177)"
  })
  
  document.querySelector("#fanta")
  .addEventListener("mouseleave", function(){
    document.querySelector("#fanta").style.color = "initial"
  })

  document.querySelector("#fantaa")
  .addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-500%"
    document.querySelector("#fantaa").style.color = "black"
  })
  
  document.querySelector("#fantaa")
  .addEventListener("mouseleave", function(){
    document.querySelector("#fantaa").style.color = "initial"
  })
  
  document.querySelector("#eff")
  .addEventListener("mousemove", function(){
    document.querySelector("#slidephoto").style.display = "initial"
    document.querySelector("#slidephoto").style.opacity = 1
  })
  
  document.querySelector("#eff")
  .addEventListener("mouseleave", function(){
    document.querySelector("#slidephoto").style.display = "none"
    document.querySelector("#slidephoto").style.opacity = 0
  })
  
  
  document.querySelector("#btnsm")
  .addEventListener("mousemove", function(){
    document.querySelector("#btnsm").style.backgroundColor = "blue"
    document.querySelector("#btnsm").style.cursor = "pointer"
    document.querySelector("#btnsm h1").style.color = "white"
  })
  
  document.querySelector("#btnsm")
  .addEventListener("mouseleave", function(){
    document.querySelector("#btnsm").style.backgroundColor = "initial"
    document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)"
  
  })
}

anim()

var tl = gsap.timeline()


tl.from("#nav h1",{
  y:20,
  opacity:0,
  duration:0.5,
  delay:0.8,
  ease:"power2.in"
},"nav")

tl.from("#navpart2",{
 y:40,
 opacity:0,
 duration:0.5,
 delay:0.8,
 ease:"power2.in"
},"nav")


tl.from(".stext",{
  opacity:0,
  y:10,
  duration:0.5,
  delay:0.8,
  ease:"power2.in"
 },)

 tl.from("#slidephoto",{
  opacity:0,
  scale:1,
  duration:0.5,
  delay:0.8,
  ease:"power2.out"
 },)
 