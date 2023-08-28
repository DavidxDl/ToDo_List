import noteImage from "/src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg"
import { noteList } from "./main";
import RenderNotes from "./RenderNotes";
import Note from "./TodoNoteClass";
import { getTime } from "./addForm";



export default function AddNote(title, description, priority="blue", date, id){
    const notes = document.querySelector(".notes");
    
    const note = document.createElement("div");
    note.id = id;
    note.classList.add("card", "note", "bg-dark", "text-white");

    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = noteImage;

    const priorityColor = document.createElement("div");
    priorityColor.classList.add("priority-bar");
    priorityColor.style.backgroundColor = priority;
    
    const overlay = document.createElement("div");
    overlay.classList.add("card-img-overlay");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = title;

    const text = document.createElement("p");
    text.classList.add("card-text", "overflow-y-auto");
    text.innerHTML = description;

    const timeHeader = document.createElement("h4");
    timeHeader.classList.add("timeHeader");
    timeHeader.innerText = "time;"
    const time = document.createElement("p");
    time.classList.add("time");
    time.innerText = date;

    const removeBtn = AddRemoveButton("removeBtn")

    removeBtn.addEventListener("click", () => RemoveAndUpdate(id));

    overlay.append(h5, text, time, removeBtn);
    note.append(img, priorityColor, overlay);
    notes.prepend(note);
}

export function AddNoteToArray(title, description, priority)
{
    const note = new Note(title, description, priority, getTime());
    noteList.push(note);
    UpdateLocalStorage();
    console.log(note.id)
    return note.id;
}

function UpdateLocalStorage()
{
    localStorage.setItem("NoteList", JSON.stringify(noteList));
}

function AddRemoveButton(id)
{
    const removeBtn = document.createElement("button");
    removeBtn.id = id;
    removeBtn.classList.add("btn", "btn-primary");
    removeBtn.innerText = "remove";
    return removeBtn;
}

function RemoveAndUpdate(id)
{
    const notes = document.querySelector(".notes");
    const note = document.getElementById(id);
    note.classList.add("shrink-and-disappear");

    setTimeout(() => {
         if(note)
        {
            notes.removeChild(note);
    
            const noteIndex = noteList.findIndex(nodeNote => nodeNote.id === id);
            if (noteIndex !== -1)
            {
                noteList.splice(noteIndex, 1);
                UpdateLocalStorage();
                RenderNotes(); 
            }
        }
    }, 500);
}