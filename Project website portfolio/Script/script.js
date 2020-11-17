/* menu */
  	/** toggle **/
  	const toggle = document.querySelector(".toggler");
  	const menu = document.querySelector("nav ul");
  	const li = document.querySelectorAll("nav ul li");
  	toggle.addEventListener("click", function (){
  		menu.classList.toggle("slide");
  		li.forEach(function(list){
  			list.classList.toggle("refeal");
  		});
  	});
  	
  	/** hide menu kn scroll **/
  	const nav = document.querySelector(".container nav");
  	let hide = 0;
  	window.addEventListener("scroll",function(){
  		if(pageYOffset > hide){
  			nav.style.transform = "translateY(-100%)";
  		}else{
  			nav.style.transform = "translateY(0)";
  			
  		}
  		hide = pageYOffset;
  	});
  	
  	
  	
  	/* lightbox image */
  	const buttonOverlay = document.querySelectorAll(".hover-overlay button");
  	const overlayContainer = document.querySelector(".overlay-container");
    const imgOverlay = document.querySelector(".overlay-image > div");
    const imgThumb = document.querySelectorAll(".imageGalery li img");
    
    
    
    
    let nomor;
      buttonOverlay.forEach(function(btn,i){
        btn.addEventListener("click", function(){
          nomor = i;
          lightbox(i+1);
        });
      });
    
    
      /* prev & next button */


      
      const prev = document.querySelector(".prev-btn");
     
      prev.addEventListener("click",function(){
        nomor--;
        if(nomor < 0) nomor = imgThumb.length - 1;
        lightbox(nomor + 1);
      });
      

      const next = document.querySelector(".next-btn");
     
      next.addEventListener("click",function(){
        nomor++;
        if(nomor > imgThumb.length - 1) nomor = 0;
        lightbox(nomor + 1);
      });
      

     
     const imgName = document.querySelector(".overlay-container div h3");
     const currentImage = document.querySelector(".current-image");
     
      function lightbox(path){
         overlayContainer.style.visibility="visible";
        overlayContainer.style.opacity=1;

         imgOverlay.innerHTML = `<img src="path/${path}.jpg">`;
       
      const fadeImage = document.querySelector(".overlay-image > div img");

       
       fadeImage.classList.add("fadeImg");
       
       
      const refeals = document.querySelectorAll(".refealImg");
      
       refeals.forEach(function(refeal){
         refeal.classList.remove("box-refeal");
       });
      refeals[path].classList.add("box-refeal");
       
         imgName.innerText = `gambar ${path}`;
         currentImage.innerText = path + "/" + imgThumb.length;
       }
       
       




      /* close btn lightbox */
     const closeBtnLightbox = document.querySelector(".close-btn");
      
      closeBtnLightbox.addEventListener("click",function(){
       overlayContainer.style.visibility="hidden"
       overlayContainer.style.opacity=0;
      });
      
      
      
     
    window.addEventListener("click",function (click){
      if(click.target == overlayContainer){
        overlayContainer.style.visibility="hidden"
        overlayContainer.style.opacity=0;

      }
    })
   
      
      /* load more btn */
     
      const imgBoxs = document.querySelectorAll(".hideImg");
        imgBoxs.forEach(function(imgBox){
            imgBox.style.height= 0;
        });
   
      
      
      const loadMoreBtn= document.querySelector(".load-more-btn");
      let currentIndex = 0;
      let maxShow = 4;
      
      loadMoreBtn.addEventListener("click", function(){
          for(let i = 0; i < maxShow; i++){
            if(currentIndex >= imgBoxs.length){
              loadMoreBtn.remove();
              return;
            }
          imgBoxs[i + currentIndex].classList.add("showImg");
       }
        currentIndex += maxShow;
      });