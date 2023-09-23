// Import our custom CSS
import '../scss/style.css';
import '../scss/styles.scss';
import buttonIcon from '../imgs/plus-svgrepo-com (1).svg';
import imgRemoveIcon from "/src/imgs/remove.png";
import imgEditIcon from "/src/imgs/EditIcon.png";
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import AddForm from './addForm';
import RenderNotes from './RenderNotes';
import AddNote from './addNote';
import { AddNoteToArray } from './addNote';
import { getTime } from './addForm';


document.querySelector(".addIcon").src = buttonIcon;
const notes = document.querySelector(".notes")
const addNoteBtn = document.getElementById("addNote")

export var noteList = [];
RenderNotes();



addNoteBtn.addEventListener("click", (e) =>
{
    const form = AddForm();

    console.log(form);
    
    form.addBtn.addEventListener("click", (e) =>
    {
        e.preventDefault();
        if(form.textarea.value === '') return;

        let priority = document.querySelector('input[name="priority"]:checked')?.value || "blue";
        let id = AddNoteToArray(form.titleInput.value, form.textarea.value, priority);
        AddNote(form.titleInput.value, form.textarea.value, priority, getTime(), id);
        notes.removeChild(form.formNote);
        console.log(noteList);
  
    })
})
                                                        