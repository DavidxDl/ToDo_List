import { defaultProject } from "./main";
import AddForm from "./addForm";
import { UpdateLocalStorage } from "./addNote";
import noteImage from "/src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg";
import RenderNotes from "./RenderNotes";
import Note from "./TodoNoteClass";

export default function EditNote(title, description, priority, id)
{
    const noteIndex = defaultProject.findIndex(note => note.id === id);
    if(noteIndex !== -1){

        console.log(id)
        console.log(noteIndex)
        console.log(defaultProject[noteIndex])
        
        defaultProject[noteIndex].title = title
        defaultProject[noteIndex].info = description
        defaultProject[noteIndex].priority = priority
        console.log(defaultProject[noteIndex])
        UpdateLocalStorage();
        RenderNotes();                      
    }
}

export function EditForm(title, description, priority, id)
{
    const notes = document.querySelector(".notes");
    const editForm = AddForm();

    editForm.titleInput.value = title;
    editForm.textarea.value = description;
    

   
    editForm.addBtn.addEventListener("click", (e) =>{
        e.preventDefault()
        if(editForm.textarea.value === '') return;

        let priority = document.querySelector('input[name="priority"]:checked')?.value || "blue";
        notes.removeChild(editForm.formNote);
        EditNote(editForm.titleInput.value, editForm.textarea.value, priority, id);

    
    })


}
