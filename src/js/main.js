// Import our custom CSS
import '../scss/style.css';
import '../scss/styles.scss';
import buttonIcon from '../imgs/plus-svgrepo-com (1).svg' ;
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import AddForm from './addForm';
import RenderNotes from './RenderNotes';
import AddNote from './addNote';
import Note from './TodoNoteClass';


document.querySelector(".addIcon").src = buttonIcon;
const notes = document.querySelector(".notes")
const addNoteBtn = document.getElementById("addNote")

export let noteList = [];
RenderNotes();



addNoteBtn.addEventListener("click", AddForm)
                                                        