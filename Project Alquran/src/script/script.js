  class Bookmarks {
    constructor(arab,terjemahan,arti) {
      this.arab =arab;
      this.terjemahan = terjemahan;
      this.arti = arti;
    }
  }
    
  const checkbox = document.querySelector(".hamburger-menu .checkbox")
  const bookmarkLink = document.querySelector("#bookmarks")
  const bookmarkContainer = document.querySelector(".bookmarks-container")
  
  const audio = document.querySelector(".audio-wrap audio")
  let isPlaying = false; 
  
      // let icon = "fa-pause"
      /** for bookmark item **/
      /*
      const arabText = document.querySelectorAll(".arab");
      const textBarsTerjemah = document.querySelectorAll(".terjemahan");
      const textBarsArti = document.querySelectorAll(".arti");
      */
      
      document.addEventListener("click",(e) => {

         let textArab, textTerjemahan, textArti
         
       if (e.target.classList.contains("copy-btn")) {
    
         textArab = e.target.parentElement.parentElement.nextElementSibling.innerText
         textArti = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerText
         
         const textarea = document.createElement("textarea");
            textarea.value = `${textArab}
            ${textArti}`
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
            alert(`${textarea.value} copied`);
         }
       else if (e.target.classList.contains("bookmarks-btn")){
         textArab = e.target.parentElement.parentElement.nextElementSibling.innerText
         textArti = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerText
         textTerjemahan = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.innerText
         
         const bookmark = new Bookmarks(textArab,textTerjemahan,textArti);
     
         let ayatBookmark = local.getLocalAyat();
         
         
         local.addLocalAyat(bookmark)
        // alert("bookmark yang ini sudah ditambahkan")



         // 
       }else if(e.target.classList.contains("fa-play")){
         isPlaying ? audio.pause() : audio.play()
       }

      })
      audio.addEventListener("playing",() =>
        isPlaying = true)
      audio.addEventListener("pause",() => isPlaying = false)

      

    
      /**
      // setting overlay icon variable
      const overlaySettingIcon = document.querySelector(".toggler-overlay");
      const overlaySetting = document.querySelector(".overlay-setting");
      
      // toggle switch btn 
      const toggleSwitchBtn = document.querySelectorAll(".toggle-switch-btn");
      
      // text
            const inputRange = document.querySelector(".range");
      
      
      
      
      **/
      
     
   
   
   checkbox.addEventListener("click",showNav);

      
      
      // event listener
         
     //  window.addEventListener("scroll",showAndHideIcon)
     
     //  overlaySettingIcon.addEventListener("click", togglerIcon);
         
     //  toggleSwitchBtn[0].addEventListener("click",showTextBar1);
     //  toggleSwitchBtn[1].addEventListener("click",showTextBar2);
          
   bookmarkLink.addEventListener("click",overlayBookmarkContiner);
          

            
   function showSetting(index){
     const settingIcon = document.querySelectorAll(".settings");
     settingIcon.forEach(e => {
       e.classList.remove("show-setting")
     })
     settingIcon[index].classList.toggle("show-setting")
    }
        
   function overlayBookmarkContiner(){
        bookmarkContainer.classList.toggle('show-bookmarks-container');
        document.body.classList.add("fixed-body");
       }
        
   /**
          
   function togglerIcon(){
     overlaySetting.classList.toggle("show-overlay-setting");
   }
         
   let position;
   function showAndHideIcon(e){
           if(pageYOffset > position){
              overlaySettingIcon.style.opacity="0";
              overlaySettingIcon.style.transform="scale(0)";
              overlaySetting.classList.remove("show-overlay-setting");
              
              
              
              navigation.classList.remove('toggle-class-checkbox');
           }else{
              overlaySettingIcon.style.opacity="1";
              overlaySettingIcon.style.transform="scale(1)";
           }
            position = pageYOffset;
         }
 
// function toggle text bar
 
   function showTextBar1(){
        textBarsTerjemah.forEach((textBar) => {
          let scaleBar,hideBar;
             scaleBar = "scale-bar";
             hideBar = "hide-bar";
             
             if (textBar.classList.contains("scale-bar")) {
               [scaleBar,hideBar] = [hideBar,scaleBar];
             }
             textBar.classList.toggle(scaleBar);
             setTimeout(() => {
               textBar.classList.toggle(hideBar);
             },500);
        });
     }
       
   function showTextBar2(){
         textBarsArti.forEach((textBar) => {
           let scaleBar,hideBar;
           scaleBar = "scale-bar";
           hideBar = "hide-bar";
                 
           if(textBar.classList.contains("scale-bar")) {
            [scaleBar,hideBar] = [hideBar,scaleBar];
           }
           
           textBar.classList.toggle(scaleBar);
           
           setTimeout(() => {
             textBar.classList.toggle(hideBar);
           },500);
         });
      }
          
   arabText.forEach(function(text){
         inputRange.addEventListener("input", function(){
            text.style.fontSize = inputRange.value+ "px";
           });
      });
   **/
          
          
          
   function showNav(){
        const navigation = document.querySelector(".navigation")
        navigation.classList.add("toggle-class-checkbox")
        navigation.addEventListener("click",(e) => {
          if (e.target.classList.contains("toggle-class-checkbox")) {
            navigation.classList.remove("toggle-class-checkbox")
          }
        })
      }
    
   // copy and bookmark button
   bookmarkContainer.addEventListener("click",(e) => {
        if(e.target.classList.contains("bookmarks-container")){
          e.target.classList.remove("show-bookmarks-container");
          document.body.classList.remove("fixed-body");
          
        }else if (e.target.classList.contains("bookmarks-toggler")) {
            e.target.nextElementSibling.classList.toggle("show-bookmark-content")
        }else if(e.target.classList.contains("remove-bookmark")){
           UI.deleteBookmark(e.target)
           // arr.splice(i,1)
        }
      });
      
   // const arr = [""]
   class UI {
        set arabText(text){
          this.text = text
        }
        static displayBookmark(){
           const arabLocalArray = local.getLocalAyat()
           console.log(arabLocalArray)
           arabLocalArray.forEach(ayat => {
             UI.addBookmark(ayat)
           })
        }
        static addBookmark(ayat){
           // ul & li
            const ul = document.querySelector('.bookmarks-container ul')
            const li = document.createElement('li')
            const button = document.createElement('button')
           
            button.setAttribute("class","bookmarks-toggler")
            
            button.innerHTML =
             `
              <h4 class="name-bookmarks"> al fatihah: <span> 6</span> </h4>
              <input type="submit" class="remove-bookmark" value="X" />
              `
            
            // add button to li
            li.appendChild(button)
            
            const div = document.createElement("div")
            div.setAttribute("class","bookmarks-content")
            div.innerHTML = `
               <h3 class="arab"> ${ayat.arab}</h3>
               <p class="terjemahan text-bars">
                 ${ayat.terjemahan}
              </p>
              <p class="arti text-bars"> 
                ${ayat.arti}
              </p>
            `
            li.appendChild(div)
            ul.append(li)
           // UI.btn.classList.add("btn-disable")
       
           // arr.push(arab)
         }
        static deleteBookmark(btn){
          btn.parentElement.parentElement.remove()
        //  arr.splice(arr.indexOf(UI.arabText,1))
         
     //  UI.btn.classList.remove("btn-disable")
       }
    }
    
   document.addEventListener("DOMContentLoader",UI.displayBookmark)
  
   class local {
      static getLocalAyat(){
        let ayat;
        if (localStorage.getItem("ayat") == null) {
           ayat = []
         }else{
           ayat = JSON.parse(localStorage.getItem("ayat"));
         }
       return ayat
      }
      static addLocalAyat(item){
        let ayahs = local.getLocalAyat()
        ayahs.push(item);
        localStorage.setItem("ayat",JSON.stringify(ayahs));
      }
      /**
      static removeLocalAyat(arr){
        const arr = local.getLocalAyat()
        arr.
      }
      **/
   }