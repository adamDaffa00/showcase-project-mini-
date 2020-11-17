class EmptyList extends HTMLElement { 
  connectedCallback(){
    this.render();
  }
  render(){
    this.innerHTML = `
      <p> tidak ada catatan </p>
    `;
  }
}
customElements.define('empty-list',EmptyList);
