class navbar extends HTMLElement {
  connectedCallback(){
    this.render()
  }
  set clickEvent(event){
    this._clickEvent = event
    this.render()
  }

  render(){
    this.innerHTML = `
          <h1 class="logo">
            <a href="#"> alquran digital </a>
          </h1>
          <div class="hamburger-menu">
            <input type="checkbox" class="checkbox">
            <div> </div>
            <div> </div>
            <div> </div>
          </div>
          <nav class="navigation">
            <ul>
              <li><a href="#" class=""> daftar surat </a></li>
              <li><a href="#"> tentang </a></li>
                </ul>
          </nav>
    `
    this.querySelector(".checkbox").addEventListener("click",this._clickEvent);
  }
}
customElements.define("nav-bar",navbar)