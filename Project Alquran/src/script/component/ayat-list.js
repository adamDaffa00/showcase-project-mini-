class ayatList extends HTMLElement {
  set dataAyat(data){
    this._dataAyat = data
    this.render()
  }
  render(){
    this._dataAyat.forEach(ayat => {
      const ayatItems = document.createElement("ayat-item")
      ayatItems.ayat = ayat
      this.appendChild(ayatItems)
    })
  }
}
customElements.define("ayat-list",ayatList)