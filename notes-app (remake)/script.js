const container = document.querySelector('.container');
const noteList = document.querySelector('.list-note');
let titleNoteValue,contentNoteValue;
/**constnoteList.addEventListener('click',(e) => {
  if(e.target.classList.contains('fa-trash')){
    titleNoteValue = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    contentNoteValue = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
    if (!noteList.classList.contains('list-note-trash')) {
      removeNote(titleNoteValue,'note');      
      let myJunkNote = new Note(titleNoteValue,contentNoteValue);
      addLocalNotes(myJunkNote,'junk-note');
    }else{
     removeNote(titleNoteValue,'junk-note');           
    }
    e.target.parentElement.parentElement.parentElement.classList.add('delete-list');
  }
  else if(e.target.classList.contains('read-note')){
    titleNoteValue = e.target.previousElementSibling.previousElementSibling.innerText;
    contentNoteValue = e.target.previousElementSibling.innerText;
    renderModalNote(titleNoteValue,contentNoteValue);
  }
});

function renderModalNote(title,text){
  const modalSection = document.createElement('note-modal');
  modalSection.classList.add('note-content-modal');
  modalSection.classList.add('show-modal');
  modalSection.title = title;
  modalSection.text = text;
  container.appendChild(modalSection);
}

// fungsi untuk menghilangkan modal catatan
function closeModalNote(e){
  e.target.parentElement.parentElement.parentElement.classList.remove('show-modal');
}**/