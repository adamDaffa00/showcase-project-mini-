const navbar = document.querySelector('.navbar');const menu = document.querySelector('.menu');
const clearBtn = document.querySelector('#clear');
const cancelBtn = document.querySelector('#cancel');
const addNewNoteBtn = document.querySelector('#add-new');
const addBtn = document.querySelector('.add');
const textfield = document.querySelector('.modal-field-section');
const emptyList = document.querySelector('.empty-list');
let noteAdded = false,titleInput,textareaInput;

// listener
navbar.clickEvent = showMenu;
navbar.clickAddBtn = showTextField;
navbar.DirectBtn = directPage;
cancelBtn.addEventListener('click',cancel);
addNewNoteBtn.addEventListener('click',addNote);

// toggle menu function
function showMenu(e){
  navbar.menu.classList.toggle('toggle-menu');
}

// show field text
function showTextField(){
  if(!noteAdded)
    textfield.classList.add('show-modal');
    noteAdded = true;
}

function directPage (){
  window.location = 'recycle-bin.html';
}

function displayNoteList(){
  let noteObj = getNote('note');
  noteObj.forEach(note => addNoteList(note));
}

function addNoteList(note){
  const uListEl = noteList.querySelector('note-list');
  // tampilkan wadah list dan sembunyikan list kosong
  emptyList.classList.add('hide-empty-list');
  noteList.classList.remove('hide-list-note');
  // tampilkan list ke wadah
  uListEl.Notes = note;
}

// render localNote
document.addEventListener('DOMContentLoaded',displayNoteList);

// menambahkan catatan ke dalam list
function addNote(){
   titleInput = document.getElementById('title');
   textareaInput = document.getElementById('textarea');
  // cek apakah field text kosong 
  if (titleInput.value.length != 0) {
    if(textareaInput.value == ''){
      alert('anda belum mengisi catatan');
    }
    else{
     // block kode 
     const newNote = new Note(titleInput.value,textareaInput.value);
     clear.addEventListener('click', () => {
       clearFieldText();
     });
     addLocalNotes(newNote,'note');
     addNoteList(newNote);
     clearFieldText();
    }
  }else{
    alert('anda belum mengisi judul');
  }
}


function clearFieldText(){
   titleInput.value = '';
   textareaInput.value = '';
}

// Fungsi untuk tombol cancel pada tedt field
function cancel(e){
  if(noteAdded){
     e.target.parentElement.parentElement.parentElement.parentElement.classList.remove('show-modal');
  }
  noteAdded = false;
}

// auto resize text area 
function addAutoResize() {
  document.querySelectorAll('[data-autoresize]').forEach(function (element) {
    element.style.boxSizing = 'border-box';
    var offset = element.offsetHeight - element.clientHeight;
    element.addEventListener('input', function (event) {
      event.target.style.height = 'auto';
      event.target.style.height = event.target.scrollHeight + offset + 'px';
    });
    element.removeAttribute('data-autoresize');
  });
}
addAutoResize();