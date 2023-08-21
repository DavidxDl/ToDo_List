// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import AddNote from './addNote'
import AddForm from './addForm'

const notes = document.querySelector(".notes")
const addNoteBtn = document.getElementById("addNote")


addNoteBtn.addEventListener("click", AddForm)
                                                        