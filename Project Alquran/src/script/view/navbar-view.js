
const navbarElement = document.querySelector("nav-bar")
  
const onHamburgerBtnClick = () => {
     const navigation = document.querySelector(".navigation")
     
     navigation.classList.add("toggle-class-checkbox")
     
     navigation.addEventListener("click",(e) => {
       if (e.target.classList.contains("toggle-class-checkbox")) {
         e.target.classList.remove("toggle-class-checkbox")
       }
     })
}


navbarElement.clickEvent = onHamburgerBtnClick