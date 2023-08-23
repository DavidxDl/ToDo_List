import { format } from "date-fns";
import AddNote from "./addNote"
import { noteList } from "./main";
import Note from "./TodoNoteClass"; 
import noteImage from "/src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg"


export default function AddForm(){
    if(document.querySelector("form") != null)return

    const notes = document.querySelector(".notes")

    const note = document.createElement("div")
    note.classList.add("card")
    note.classList.add("note")
    note.classList.add("bg-dark")
    note.classList.add("text-white")

    const img = document.createElement("img")
    img.src = noteImage;
    img.classList.add("card-img")

    const form = document.createElement("form")
    form.name = "title"
    form.id = "title"
    form.classList.add("card-img-overlay")

    const titleInput = createInput("text", "noteTitle", "Title")
    
    const textarea = createTextarea('noteInfo', 'Description')
    
    const headerLabel = createLabel("Priority", "headerLabel");
    
    const wrap = document.createElement("div");
    wrap.classList.add("formWrap");

    const br = document.createElement("br");

    const radio1 = createRadioButton("priority","highPriority","red");
    
    const label1 = createLabel("high","formLabelNote");

    const radio2 = createRadioButton("priority","highPriority","yellow");

    const label2 = createLabel("mid","formLabelNote")

    const radio3 = createRadioButton("priority","highPriority","blue");

    const label3 = createLabel("low", "formLabelNote")

    const button = createButton("Add Note")

    button.addEventListener("click", () =>{
        const priority = document.querySelector('input[name="priority"]:checked').value;
        AddNote(titleInput.value, textarea.value, priority, getTime());
        notes.removeChild(note);
        const newNote = new Note(titleInput.value, textarea.value, priority, getTime());
        noteList.push(newNote);
        localStorage.setItem("NoteList", JSON.stringify(noteList))
        console.log(noteList);
    })

    

    wrap.append(
        radio1, label1,
        radio2, label2,
        radio3, label3,
        br, button
    )
    form.append(
        titleInput,
        textarea,
        headerLabel, wrap
        )


    note.append(img, form
        )
    notes.prepend(note)

}

export function getTime(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    return date +' '+ time;
} 

function createInput(type, id, placeholder = '', value= '')
{
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    input.value = value;

    return input;
}

function createTextarea(id, placeholder = "", name="")
{
    const textarea = document.createElement("textarea");
    textarea.classList.add("card-text")
    textarea.classList.add("form-control")
    textarea.placeholder = placeholder
    textarea.id = id
    textarea.name = name

    return textarea;
}

function createLabel(text, Class='')
{
    const label = document.createElement("label");
    label.classList.add(Class);
    label.innerText = text;

    return label;
}

function createRadioButton(name, id, value)
{
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.id = id;
    radio.value = value;

    return radio;
}

function createButton(text)
{
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add("btn");
    button.classList.add("btn-primary");

    return button;
}
