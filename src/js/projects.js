import { createInput, createButton } from "./addForm";

export function createProjectForm()
{
    const projects = document.querySelector(".Projects");

    const form = document.createElement("form")
    form.classList.add("projectForm")

    const projectNameInput = createInput("text", "projectNameInput", "name")
    const submitProject = createButton("Done")


    form.append(projectNameInput, submitProject)

    projects.append(form)


    submitProject.addEventListener("click", (e) =>{
        e.preventDefault()

        const projectAncher = document.createElement("a")
        projectAncher.innerText = projectNameInput.value
        projectAncher.classList.add("projectItem") 
        projectAncher.id = projectNameInput.value
        projectAncher.href = "#"

        projects.append(projectAncher)
        projects.removeChild(form)
    })
}