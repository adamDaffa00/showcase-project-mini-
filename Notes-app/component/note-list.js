class NoteList extends HTMLElement {
  set Notes (notes){
    this._notes = notes;
    this.render();
  }
  render(){
    const noteItemElement = document.createElement('note-item');
    /**
    this._notes.forEach(note => {
     const noteItemElement = document.createElement('note-item');
     noteItemElement.Note = note;
      this.appendChild(noteItemElement);
    });
    **/
    noteItemElement.Note = this._notes;
    this.appendChild(noteItemElement);
  }
}
customElements.define('note-list',NoteList);