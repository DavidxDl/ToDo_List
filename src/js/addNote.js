
export default function AddNote(title, description, priority, date){
    const notes = document.querySelector(".notes");
    
    const note = document.createElement("div");
    note.classList.add("card");
    note.classList.add("note");
    note.classList.add("bg-dark");
    note.classList.add("text-white");

    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = "../src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg"

    const priorityColor = document.createElement("div");
    priorityColor.classList.add("priority-bar");
    priorityColor.style.backgroundColor = priority;
    
    const overlay = document.createElement("div");
    overlay.classList.add("card-img-overlay");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = title;

    const text = document.createElement("p");
    text.classList.add("card-text");
    text.innerHTML = description;

    const timeHeader = document.createElement("h4");
    timeHeader.classList.add("timeHeader");
    timeHeader.innerText = "time;"
    const time = document.createElement("p");
    time.classList.add("time");
    time.innerText = date;
    
    overlay.append(h5, text, time);
    note.append(img, priorityColor, overlay);
    notes.prepend(note);

/*
<div class="card note bg-dark text-white">
|||<img src="../src/imgs/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg" class="card-img" alt="...">
|||<div class="card-img-overlay">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text">Last updated 3 mins ago</p>
   </div>
</div> */
}