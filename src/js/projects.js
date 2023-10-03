import RenderNotes from "./RenderNotes";
import { createInput, createButton } from "./addForm";
import { currentProject, projectsList } from "./main";

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

        projectsList.push(projectNameInput.value)
        localStorage.setItem("Projects", JSON.stringify(projectsList))
    })

}

export function RenderProjects()
{
    const projectsDiv = document.querySelector(".Projects");
    if(!localStorage.getItem("Projects"))
    {
        localStorage.setItem("Projects", JSON.stringify(projectsList))
    }
    else
    {
        projectsList = JSON.parse(localStorage.getItem("Projects"))
    }
    projectsDiv.innerHTML = ''
    const modal = document.querySelector("[data-modal")

    projectsList.forEach(project => {
        const projectAncher = document.createElement("a")

        projectAncher.innerText = project
        projectAncher.classList.add("projectItem") 
        projectAncher.id = project
        projectAncher.href = "#"

        projectsDiv.append(projectAncher)

        projectAncher.addEventListener("click", () => {
            modal.close()
            currentProject = project
            RenderNotes(currentProject)
        })
    })



}
