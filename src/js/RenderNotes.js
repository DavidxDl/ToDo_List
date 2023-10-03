import { defaultProject } from "./main";
import AddNoteToDom from "./addNote";




export default function RenderNotes(projectName = "defaultProject")
{
    const notes = document.querySelector(".notes")
    if(projectName === "defaultProject")
    {
        // if theres not Default project on the localStorage, it creates one
        if(!localStorage.getItem("defaultProject"))
        {
            localStorage.setItem("defaultProject", JSON.stringify(defaultProject))
        }
        // if theres is a default project already it gets the array of notes
        else{
            defaultProject = JSON.parse(localStorage.getItem("defaultProject"));
        }
        
        //clear the notes
        notes.innerHTML = '';

        console.log(defaultProject);
    

        defaultProject.forEach(note => {
            console.log(note)
            console.log(note.id, note.info, note.priority)
            AddNoteToDom(note.title, note.info, note.priority, note.time, note.id);
        })

    }

    else{

    }
}