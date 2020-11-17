class NavBar extends HTMLElement {
  conectedCallback(){
    this.render();
  }
  set clickEvent(event){
    this._ClickEvent = event;
    this.render();
  }
  set clickAddBtn(event){
    this._ClickAddBtn = event;
    this.render();
  }
  set DirectBtn(event){
    this._DirectBtn = event;
    this.render();
  }
  get menu(){
    return this.querySelector('.menu');
  }
  render(){
    this.innerHTML = `
      <div class="hamburger-menu">
        <i class="fas fa-bars"></i>
      </div>
      <div class="menu">
        <ul class="navigation">
          <li><a href="index.html">all note <i class="fas fa-sticky-note"></i> </a></li>
          <li><a href="#" id="trash-page">trash <i class="fas fa-trash"></i></a></li>
        </ul>
        <ul class="tags">
          <li><a href="#"> <i class="fas fa-hashtag"></i>tag1 </a></li>
          <li><a href="#"> <i class="fas fa-hashtag"></i>tag2 </a></li>
          <li><a href="#"> <i class="fas fa-hashtag"></i>tag3 </a></li>
        </ul>
        <div class="footer-nav">
          <a href="#"> about </a>           
        </div>
       </div>
       <input type="search" name="search" placeholder="cari catatan" class="search" id="search">
       <button class="add"> <span> tambah catatan </span>  <i class="fas fa-plus"></i></button>
    `;
   this.querySelector('.hamburger-menu').addEventListener('click',this._ClickEvent);
   this.querySelector('.add').addEventListener('click',this._ClickAddBtn);
   this.querySelector('#trash-page').addEventListener('click',this._DirectBtn);
    
  }
}
customElements.define('nav-bar',NavBar);