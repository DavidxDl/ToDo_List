import { noteList } from "./main";
import AddNote from "./addNote";




export default function RenderNotes()
{
    const notes = document.querySelector(".notes")
    if(!localStorage.getItem("NoteList"))
    {
        localStorage.setItem("NoteList", JSON.stringify(noteList))
    }
    else{
        noteList = JSON.parse(localStorage.getItem("NoteList"));
    }
    
    notes.innerHTML = '';
    
    noteList.forEach(note => {
        AddNote(note.title, note.info, note.priority, note.time);
    })
}