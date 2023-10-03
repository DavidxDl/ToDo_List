import { currentProject } from "./main";
import AddForm from "./addForm";
import { UpdateLocalStorage } from "./addNote";
import noteImage from "/src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg";
import RenderNotes from "./RenderNotes";
import Note from "./TodoNoteClass";

export default function EditNote(title, description, priority, id)
{
    let projectArray = JSON.parse(localStorage.getItem(currentProject));
    console.log("this is the projectArray of the current project" + projectArray)

    const noteIndex = projectArray.findIndex(note => note.id === id);
    if(noteIndex !== -1){

        console.log(id)
        console.log("note index: " + noteIndex)
        console.log("note at index : " + noteIndex + " :" + projectArray[noteIndex])
        
        projectArray[noteIndex].title = title
        projectArray[noteIndex].info = description
        projectArray[noteIndex].priority = priority
        console.log(projectArray[noteIndex])
        UpdateLocalStorage(currentProject, projectArray);
        RenderNotes(currentProject);                      
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
        console.log("HEY SUP")
        let priority = document.querySelector('input[name="priority"]:checked')?.value || "blue";
        EditNote(editForm.titleInput.value, editForm.textarea.value, priority, id);

    
    })


}
