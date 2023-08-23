// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import AddNote from './addNote'
import AddForm from './addForm'
import Note from './TodoNoteClass'

const notes = document.querySelector(".notes")
const addNoteBtn = document.getElementById("addNote")

export let noteList = [];
noteList[0] = new Note("Habibi", "habibibibibi", "red");
console.log(noteList);


addNoteBtn.addEventListener("click", AddForm)
                                                        