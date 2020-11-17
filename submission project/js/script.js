
 const navbarToggler = document.querySelector("#checkbox")
 const navbar = document.querySelector(".navigation")
 
 
 
 
 
 // event listener
 navbarToggler.addEventListener("click",openNavbar)
 window.addEventListener("scroll",refealAnimation)
 document.body.addEventListener("click",closeNavigation)
 
 
 
 // function
 
 function openNavbar(){
   navbar.classList.toggle("show-navigation")
 }
 
 function refealAnimation(){
  const box = document.querySelectorAll(".refeal-animation")
  
  
  const screenSize = Math.floor(window.innerHeight / 1.2)
  
   box.forEach(function(e,i){
     
   let position = Math.floor(e.getBoundingClientRect().top)
   
   if (position < screenSize) {
     e.classList.add("show-box")
    }
   
  })
  
  
  
  
 }
 
 
 
 function closeNavigation(e){
   console.log(e.target)
  if(e.target.classList.contains("navigation")){
  
    document.querySelector(".navigation").classList.remove("show-navigation")
  }
   
 }