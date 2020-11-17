class listItem extends HTMLElement {
  conectedCallback(){
    alert("element berhasil dibuat")
  }
  set data(surah){
    this._data = surah
    this.render()
  }
  
  set clickEvent(event){
    this._clickEvent = event
    this.render()
  }
  render(){
    
    const surahItemElement = document.createElement("surah-item")
    surahItemElement.surah = this._data
    
    this.appendChild(surahItemElement)

    this.addEventListener("click",this._clickEvent)
  }
}

customElements.define("list-item",listItem)