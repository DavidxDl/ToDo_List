import noteImage from "/src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg"
import { noteList } from "./main";
import RenderNotes from "./RenderNotes";

export default function AddNote(title, description, priority, date){
    const notes = document.querySelector(".notes");
    
    const note = document.createElement("div");
    note.id = "note";
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

    const removeBtn = document.createElement("button");
    removeBtn.id = "removeBtn";
    removeBtn.classList.add("btn", "btn-primary")
    removeBtn.innerText = "remove"

    removeBtn.addEventListener("click", ()=>{
        notes.removeChild(note);
        for(let i = 0; i < noteList.length; i++){
            if(noteList[i].title === title)
                noteList.splice(i,1);
        }
        localStorage.setItem("NoteList", JSON.stringify(noteList));
        RenderNotes();

        
    })

    
    overlay.append(h5, text, time, removeBtn);
    note.append(img, priorityColor, overlay);
    notes.prepend(note);


}