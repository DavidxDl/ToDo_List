// Import our custom CSS
import '/src/scss/styles.scss';
import '/src/scss/style.css';
import '/src/imgs/plus-svgrepo-com (1).svg';
import 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;900&display=swap';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import AddForm from './addForm';
import RenderNotes from './CheckStorage';
import AddNote from './addNote';
import Note from './TodoNoteClass';


const notes = document.querySelector(".notes")
const addNoteBtn = document.getElementById("addNote")

export let noteList = [];
RenderNotes();
/* if(!localStorage.getItem("NoteList"))
{
    localStorage.setItem("NoteList", JSON.stringify(noteList))
}
else{
    noteList = JSON.parse(localStorage.getItem("NoteList"));
}

notes.innerHTML = '';

noteList.forEach(note => {
    AddNote(note.title, note.info, note.priority, note.time);
}) */


addNoteBtn.addEventListener("click", AddForm)
                                                        