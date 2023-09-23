import noteImage from "/src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg";
import imgRemoveIcon from "/src/imgs/remove.png";
import imgEditIcon from "/src/imgs/EditIcon.png";
import { noteList } from "./main";
import RenderNotes from "./RenderNotes";
import Note from "./TodoNoteClass";
import AddForm, { getTime } from "./addForm";
import EditNote, { EditForm } from "./EditNote";



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
    h5.innerText = title;

    const text = document.createElement("p");
    text.classList.add("card-text", "overflow-y-auto");
    text.innerText = description;

    const timeHeader = document.createElement("h4");
    timeHeader.classList.add("timeHeader");
    timeHeader.innerText = "time;"
    const time = document.createElement("p");
    time.classList.add("time");
    time.innerText = date;

    const removeBtn = CreateButton("removeBtn", "noteButtonIcons");
    CreateIcon("removeIcon","iconImg", imgRemoveIcon, removeBtn)

    const editBtn = CreateButton("editBtn", "noteButtonIcons");
    CreateIcon("editIcon", "iconImg", imgEditIcon, editBtn);

    removeBtn.addEventListener("click", () => RemoveAndUpdate(id));

    editBtn.addEventListener("click",   () => {
        EditForm(h5.innerText, text.innerText, priority, id);
        notes.removeChild(note);

    });

    overlay.append(h5, text, time, removeBtn, editBtn);
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

function CreateIcon(id, clss, src, btn){
    const icon = document.createElement("img");
    icon.classList.add(clss)
    icon.id = id;
    icon.src = src;
    btn.append(icon);
}

export function UpdateLocalStorage()
{
    localStorage.setItem("NoteList", JSON.stringify(noteList));
}

function CreateButton(id, clss)
{
    const removeBtn = document.createElement("button");
    removeBtn.id = id;
    removeBtn.classList.add(clss);
    return removeBtn;
}

function RemoveAndUpdate(id)
{
    const notes = document.querySelector(".notes");
    const note = document.getElementById(id);
    console.log("note to remove" + note)
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
