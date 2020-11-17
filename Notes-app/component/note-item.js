class NoteItem extends HTMLElement {
  set Note(note){
    this._note = note;
    this.render()
  }
  render(){
    this.innerHTML = `
      <h2> <a href="#" class="note-items"> ${this._note.title} </a></h2>
      <p> ${this._note.content} </p>
      <button class="read-note"> selengkapnya <i class="fas fa-arrow-right"> </i></button>
      <div class="edit-note">
        <button> <i class="fas fa-trash"></i></button>
      </div>
    `;
  }
}
customElements.define('note-item',NoteItem);

