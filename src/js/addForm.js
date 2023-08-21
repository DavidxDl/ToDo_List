/*  
<div class="card note bg-dark text-white">
    <img src="../src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg" class="card-img" alt="...">
    <form name="title" id="title"  class="card-img-overlay">
        <input id="noteTitle" class="card-title" placeholder="Title" type="text">
        <textarea class="card-text form-control" aria-label="With textarea" type="text" placeholder="description" id="noteInfo" name="noteDescription"></textarea>
        <p class="card-text">Last updated 3 mins ago</p>
</div> */
export default function AddForm(){
    if(document.querySelector("form") != null)return
    const notes = document.querySelector(".notes")
    const note = document.createElement("div")
    note.classList.add("card")
    note.classList.add("note")
    note.classList.add("bg-dark")
    note.classList.add("text-white")
    const img = document.createElement("img")
    img.src = "../src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg"
    img.classList.add("card-img")
    const form = document.createElement("form")
    form.name = "title"
    form.id = "title"
    form.classList.add("card-img-overlay")
    const titleInput = document.createElement("input")
    titleInput.id = "noteTitle"
    titleInput.classList.add("card-title")
    titleInput.placeholder = "Title"
    const textarea = document.createElement("textarea")
    textarea.classList.add("card-text")
    textarea.classList.add("form-control")
    textarea.placeholder = "Description"
    textarea.id = "noteInfo"
    textarea.name = "noteDescription"
    const button = document.createElement("button")
    button.innerText = "Add Note"
    button.classList.add("btn")
    button.classList.add("btn-primary")



    form.append(titleInput, textarea,button)
    note.append(img, form)
    notes.append(note)

}
