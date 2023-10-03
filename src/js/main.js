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
import AddNoteToDom from './addNote';
import { AddNoteToArray } from './addNote';
import { getTime } from './addForm';
import { createProjectForm } from './projects';


document.querySelector(".addIcon").src = buttonIcon;
const notes = document.querySelector(".notes")

const newProjectBtn = document.querySelector(".newProjectBtn")
const addNoteBtn = document.getElementById("addNote")
const modal = document.querySelector("[data-modal")
const closeModalBtn = document.querySelector("[data-close-modal]")
const projectsBtn = document.querySelector("[data-open-modal]")
const defaultProjectBtn = document.getElementById("defaultProject");

export var defaultProject = [];
export var currentProject = "defaultProject"
RenderNotes(currentProject);



addNoteBtn.addEventListener("click", (e) =>
{
    const form = AddForm();

    console.log(form);
    
    form.addBtn.addEventListener("click", (e) =>
    {
        e.preventDefault();
        if(form.textarea.value === '') return;

        let priority = document.querySelector('input[name="priority"]:checked')?.value || "blue";
        let id = AddNoteToArray(form.titleInput.value, form.textarea.value, priority, currentProject);
        AddNoteToDom(form.titleInput.value, form.textarea.value, priority, getTime(), id);
        notes.removeChild(form.formNote);
        console.log(defaultProject);
  
    })
})

projectsBtn.addEventListener("click", (e) => {
    modal.showModal()

    closeModalBtn.addEventListener("click", () => {
        modal.close()
});
    })

defaultProjectBtn.addEventListener("click", () => {
    modal.close();
    currentProject = "defaultProject"
    RenderNotes(currentProject);
})

newProjectBtn.addEventListener("click", createProjectForm)


                                                        