class surahItem extends HTMLElement {
  set surah(surah){
    this._surah = surah
    this.render()
  }
  get dataNomor(){
    return this.querySelector(".link-surah").dataset.nomor
  }
  render(){
    this.innerHTML = `
    <div class="wrapping">
     <h5> ${this._surah.nomor} </h5>
      <div>
        <a href="#" data-nomor=${this._surah.nomor} class="link-surah">
        <p> ${this._surah.nama} : ${this._surah.ayat} </p>
        <p class="nama-surah"> ${this._surah.arti} </p>
        </a>
        <p> ${this._surah.asma} </p>
      </div>
     </div>
    `
  }
}

customElements.define("surah-item",surahItem)

