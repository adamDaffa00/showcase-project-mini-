
const checkboxBtn = document.querySelector(".checkbox");
const navigation = document.querySelector(".navigation");
const linksSurah = document.querySelectorAll(".link-surah");

 // logo variable
const logo = document.querySelector(".logo a")


// event listener 
  // navbar 
 checkboxBtn.addEventListener("click",navbarToggler)
 navigation.addEventListener("click", navigationEvent);
  linksSurah.forEach(function(link){
    link.addEventListener("click",showSurah)
  });
  
  logo.addEventListener('click',indexPage)
  
  
/* navbar */
function navbarToggler(){
 navigation.classList.add('toggle-class-checkbox');
}
 
function navigationEvent(e){
   if(e.target.classList.contains("toggle-class-checkbox")){
     navigation.classList.remove('toggle-class-checkbox');
   }
}

/* direction link */
 
 function indexPage(e){
   e.preventDefault()
  window.location = 'index.html';
 }