const tabBtnElement = document.querySelectorAll(".tab-btn")
const tabContentElement = document.querySelectorAll(".tab-content")

tabBtnElement.forEach((e,i) => {
  e.addEventListener("click",() => {

   tabContentElement[i].classList.toggle("show-tab-content");
  
   if (e.children[0].classList.contains("fa-minus")){
     e.children[0].classList.replace("fa-minus","fa-plus");
   }
   if(tabContentElement[i].classList.contains("show-tab-content")){
     e.children[0].classList.replace("fa-plus","fa-minus")
   }
  });
});