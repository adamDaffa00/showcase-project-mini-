class ayatItemsElement extends HTMLElement {
 set ayat(ayat){
    this._ayat = ayat
    this.render()
  }
  render(){
    this.innerHTML = `
           <div class="content-quran-wrap">
             <p class="nomor">1</p>
             <div>
               <ul class="settings">
                 <li>
                    <button type="submit" class="copy-btn"> copy
                    
                     <i class="fas fa-copy"></i>
                    </button> 
       
                 </li>
                 <li>
                   <button type="submit" class="bookmarks-btn">
                      add to bookmarks
                     <i class="fas fa-bookmark"></i>
                   </button> 
               
                 </li>
               </ul>
               <h3 class="arab"> ${this.ayat.ar} </h3>
               <p class="terjemahan text-bars"> ${this.ayat.tr}</p>
               <p class="arti text-bars"> ${this.ayat.id} </p>
             </div>
           </div>
    `
  }
}
customElements.define("ayat-item",ayatItemsElement)