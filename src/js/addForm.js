import { format } from "date-fns";
import AddNote from "./addNote";
import { AddNoteToArray } from "./addNote";
import { noteList } from "./main";
import Note from "./TodoNoteClass"; 
import noteImage from "/src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg"
import { validate } from "uuid";


export default function AddForm(){
    if(document.querySelector("form") != null)return

    const notes = document.querySelector(".notes")

    const formNote = document.createElement("div")
    formNote.classList.add("card")
    formNote.classList.add("note")
    formNote.classList.add("bg-dark")
    formNote.classList.add("text-white")

    const img = document.createElement("img")
    img.src = noteImage;
    img.classList.add("card-img")

    const form = document.createElement("form")
    form.name = "title"
    form.id = "title"
    form.classList.add("card-img-overlay")

    const titleInput = createInput("text", "noteTitle", "Title");
    
    const textarea = createTextarea('noteInfo', 'Description');
    textarea.required = true;
    ValidateInput(textarea);
    textarea.addEventListener("input", () => ValidateInput(textarea)) ;
    
    const headerLabel = createLabel("Priority", "headerLabel");
    
    const wrap = document.createElement("div");
    wrap.classList.add("formWrap");

    const br = document.createElement("br");

    const radio1 = createRadioButton("priority","highPriority","red");
    
    const label1 = createLabel("high","formLabelNote");

    const radio2 = createRadioButton("priority","highPriority","yellow");

    const label2 = createLabel("mid","formLabelNote")

    const radio3 = createRadioButton("priority","highPriority","blue");

    const label3 = createLabel("low", "formLabelNote");

    const addBtn = createButton("Add Note");
    addBtn.type = "submit";

    addBtn.addEventListener("click", () =>{
        if(textarea.value === '') return;

        let priority = document.querySelector('input[name="priority"]:checked')?.value || "blue";
        let id = AddNoteToArray(titleInput.value, textarea.value, priority);
        AddNote(titleInput.value, textarea.value, priority, getTime(), id);
        notes.removeChild(formNote);
        console.log(noteList);
    })

    

    wrap.append(
        radio1, label1,
        radio2, label2,
        radio3, label3,
        br
    )
    form.append(
        titleInput,
        textarea,
        headerLabel, wrap,
        addBtn
        )


    formNote.append(img, form
        )
    notes.prepend(formNote)

}

export function getTime(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    return date +' '+ time;
} 

function notify(message)
{
    alert(message);
}

function ValidateInput(title)
{
    if (title.value === '')
    {
        title.setCustomValidity("There's not Text");
        title.style.border = "1px solid red";
    }
    else
    {
        title.setCustomValidity("");
        title.style.border = "1px solid yellow";
    }
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
