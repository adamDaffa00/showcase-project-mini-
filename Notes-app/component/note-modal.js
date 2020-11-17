class noteModal extends HTMLElement {
  connectedCallback(){
    this.render();
  }
  set title(title){
    this._title = title;
    this.render()
  }
  set text(text){
   this._text = text;
   this.render();
  }
  render(){
    this.innerHTML = `
        <div class="modal-topbar">
          <button onclick='closeModalNote(event)'><i class="fas fa-chevron-left"></i></button>
          <button><i class="fas fa-edit"></i></button>
        </div>
        <div>
          <input type="text" disabled value="${this._title}" id="" class="note-title">
          <textarea disabled class="note-content" data-autoresize>${this._text}</textarea>
        </div>
    `;
  }
}
customElements.define('note-modal',noteModal);