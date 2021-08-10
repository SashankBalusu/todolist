const content = document.querySelector("#content")
const body = document.querySelector("body")
let localList = []
let projectValue = null
function createForm (){
    if (document.querySelector("#formContainer") == null){
        // const formContainer = document.querySelector("#formContainer")
        // formContainer.setAttribute("style", "display:block;")
        let formContainer = document.createElement("div")
        formContainer.id = "formContainer"
        body.appendChild(formContainer)
        
    }
    else {
        const form = document.querySelector("form")
        
    }
    
    const form = document.createElement("form")
    //form.setAttribute("style", "z-index:2")
    if (localList.length > 0){
        form.setAttribute("style", "top:0;")
    }
    formContainer.appendChild(form)
    const title = document.createElement("input")
    title.type = "text"
    title.placeholder = "Title"
    title.id = "title"
    //title.setAttribute("required", "");
    form.appendChild(title)
    const description = document.createElement("input")
    description.type = "text"
    description.placeholder = "Description"
    description.id = "description"
    form.appendChild(description) 
    const due = document.createElement("input")
    due.type = "date"
    due.id = "due"
    //due.setAttribute("required", "");
    form.appendChild(due)
    const priority = document.createElement("input")
    priority.type = "number"
    priority.placeholder = "Priority"
    priority.id = "priority"
    //priority.setAttribute("required", "");
    form.appendChild(priority)
    const project = document.createElement("input")
    project.type = "text"
    if (projectValue){
        project.value = projectValue
    }
    else {
        project.placeholder = "Project Name"
    }
    project.id = "project"
    //project.setAttribute("required", "");
    form.appendChild(project)
    const submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "submit"
    submit.id = "submit"
    form.appendChild(submit)
    


}
function deleteForm(){
    // const formContainer = document.querySelector("#formContainer")
    // formContainer.setAttribute("style", "display:none;")
    let e = document.querySelector("form")
    let child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    formContainer.removeChild(e)
}
function createProjectForm(){
    if (document.querySelector("#projectFormContainer") == null){
        let div = document.createElement("div")
        div.id = "projectFormContainer"
        body.appendChild(div)
    }
    let projectFormContainer = document.querySelector("#projectFormContainer")
    const project = document.createElement("input")
    project.type = "text"
    project.placeholder = "Project Name"
    project.id = "projectSubmissionName"
    projectFormContainer.appendChild(project)
    const submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "submit"
    submit.id = "submitProjectForm"
    projectFormContainer.appendChild(submit)
    // make form, delete form on submit.
}
function deleteProjectForm(){
    let e = document.querySelector("#projectFormContainer")
    let child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
}
function createTask(todoList){
    localList = todoList
    deleteTasks()
    const container = document.createElement("div")
    container.id = "taskContainer"
    content.appendChild(container)
    for (let i = 0; i <todoList.length; i++){
        
        const div = document.createElement("div")
        div.classList.add("todoTask")
        div.id = "task" + i;
        container.appendChild(div)
        let item = todoList[i]
        console.log(localList)
        const title = document.createElement("p")
        title.textContent = item.titles
        div.appendChild(title)
        const des = document.createElement("p")
        des.textContent = item.descriptions
        div.appendChild(des)
        const due = document.createElement("p")
        due.textContent = item.dueDates
        div.appendChild(due)
        const priority = document.createElement("p")
        priority.textContent = item.priorities
        div.appendChild(priority)


        const xOut = document.createElement("button")
        xOut.textContent = "x"
        xOut.setAttribute("style", "background:transparent; border:none;")
        xOut.id = "close"  + i
        xOut.classList.add("xOut")
        xOut.addEventListener("click", function(){
            let xOutID = xOut.getAttribute("id").slice(5)
            let div = document.querySelector("#task" + xOutID)
            div.remove()
            localList.splice(xOutID, 1)
            localStorage.setItem("todoList", JSON.stringify(todoList))
        })
        div.appendChild(xOut)
    }

    body.setAttribute("style","grid-template-rows: repeat("+ todoList.length+", 100px); display:grid;")
}
function createSpecificTask(name){
    deleteTasks()
    let counter = 0
    const container = document.createElement("div")
    container.id = "taskContainer"
    content.appendChild(container)
    for (let i = 0; i <localList.length; i++){
        if (localList[i].projects == name){
            counter++
            const div = document.createElement("div")
            div.classList.add("todoTask")
            div.id = "task" + i
            container.appendChild(div)
            let item = localList[i]
            const title = document.createElement("p")
            title.textContent = item.titles
            div.appendChild(title)
            const des = document.createElement("p")
            des.textContent = item.descriptions
            div.appendChild(des)
            const due = document.createElement("p")
            due.textContent = item.dueDates
            div.appendChild(due)
            const priority = document.createElement("p")
            priority.textContent = item.priorities
            div.appendChild(priority)

            const xOut = document.createElement("button")
            xOut.textContent = "x"
            xOut.setAttribute("style", "background:transparent; border:none;")
            xOut.id = "close"  + i
            xOut.classList.add("xOut")
            xOut.addEventListener("click", function(){
                let xOutID = xOut.getAttribute("id").slice(5)
                let div = document.querySelector("#task" + xOutID)
                div.remove()
                localList.splice(xOutID, 1)
                localStorage.setItem("todoList", JSON.stringify(localList))
            })
            div.appendChild(xOut)
        }
    }
    body.setAttribute("style","grid-template-rows: repeat("+ counter+", 100px); display:grid;")

}
function deleteTasks(){
    let e = document.querySelector("#taskContainer")
    if (e == null){
        console.log("null, exited")
        return
    }
    let child = e.lastElementChild
    while(child){
        e.removeChild(child)
        child = e.lastElementChild
    }
    content.removeChild(e)
}
function createScreen(){
    body.setAttribute("style", "display:grid;")
    let div = document.createElement("div")
    div.id = "projects"
    body.appendChild(div)
    content.setAttribute("style", "display:grid;")
    const particlesjs = document.querySelector("#particles-js")
    particlesjs.setAttribute("style", "display:none");
    const continueToAppContainer = document.querySelector("#continueToAppContainer")
    continueToAppContainer.setAttribute("style", "display:none;")

    

    let addProject = document.createElement("button")
    addProject.textContent = "+"
    addProject.id = "addProject"
    addProject.setAttribute("style", "margin-left:20px")
    
    div.appendChild(addProject)
    let projectButtons = document.createElement("div")
    projectButtons.id = "projectButtons"
    div.appendChild(projectButtons)

    let projLabel = document.createElement("h1")
    projLabel.id = "projectLabel"
    projLabel.textContent = "Projects"
    projectButtons.appendChild(projLabel)
    let allTasks = document.createElement("button")
    allTasks.textContent = "All Tasks"
    allTasks.classList.add("probut")
    allTasks.addEventListener("click", function(){

        let x = document.querySelectorAll(".probut");
        if (x){
            x.forEach(function(elem) {
                elem.style.borderRight = "none"
            });
        }
        
        allTasks.setAttribute("style", "border-right: solid #66FCF1")
        projectButtonEventListener(allTasks.textContent)
    })
    allTasks.setAttribute("style", "background: transparent; border: none; border-right:solid #66FCF1")
    projectButtons.appendChild(allTasks)
}

function createProjects(projects){
    let div = document.querySelector("#projectButtons")
    let project = document.createElement("button")
    project.classList.add("probut")
    project.id = "project" + projects.length
    project.textContent = projects[projects.length-1]
    project.setAttribute("style", "background: transparent; border: none;margin-top: " + Math.abs(projects.length *60+ 60) + "px")
    
    //project.setAttribute("style", "margin-top: " + Math.abs(projects.length *60+ 60) + "px")
    div.appendChild(project)
    project.addEventListener("click", function(){
        //project.border = "solid #66FCF1"
        // let e = document.querySelector("#projectButtons")
        // let child = e.lastElementChild; 
        // while (child) {
        //     child.setAttribute("style", "border-right:none;")
        //     child = e.lastElementChild; 
        // }
        let x = document.querySelectorAll(".probut");
        x.forEach(function(elem) {
            elem.style.borderRight = "none"
        });
        let projectID = project.getAttribute("id").slice(7)
        this.setAttribute("style", "border-right: solid #66FCF1; margin-top: " + Math.abs((projects.indexOf(project.textContent) +1) *60 + 60) + "px")
        projectButtonEventListener(project.textContent)
    })
    
}
function createProjectsFromStorageDOM (projects){
    for (let i = 0; i < projects.length; i++){
        let div = document.querySelector("#projectButtons")
        let project = document.createElement("button")
        project.classList.add("probut")
        project.id = "project" + i
        project.textContent = projects[i]
        project.setAttribute("style", "background: transparent; border: none;margin-top: " + Math.abs((i+1) *60+ 60) + "px")
        
        //project.setAttribute("style", "margin-top: " + Math.abs(projects.length *60+ 60) + "px")
        div.appendChild(project)
        project.addEventListener("click", function(){
            //project.border = "solid #66FCF1"
            // let e = document.querySelector("#projectButtons")
            // let child = e.lastElementChild; 
            // while (child) {
            //     child.setAttribute("style", "border-right:none;")
            //     child = e.lastElementChild; 
            // }
            let x = document.querySelectorAll(".probut");
            x.forEach(function(elem) {
                elem.style.borderRight = "none"
            });
            this.setAttribute("style", "border-right: solid #66FCF1; margin-top: " + Math.abs((i+1) *60 + 60) + "px")
            projectButtonEventListener(project.textContent)
        })
        
    }
}
//add to new module for event listeners eventually

function projectButtonEventListener(name){
    if (name == "All Tasks"){
        createTask(localList)
    }
    else {
        projectValue = name
        createSpecificTask(name)
    }
}
function homePage (){
    content.setAttribute("style", "display: none")
    let div = document.createElement("div")
    div.id = "continueToAppContainer"
    body.appendChild(div)
    let introToApp = document.createElement("h1")
    introToApp.textContent = "Welcome to this todo list app. Let's get organized!"
    introToApp.id = "introToApp"
    introToApp.style.color = "white"
    div.appendChild(introToApp)
    let continueToApp = document.createElement("button")
    continueToApp.id = "continue"
    continueToApp.textContent = "Continue to App"
    div.appendChild(continueToApp)
}
export {createForm as default, createTask, deleteForm, createScreen, createProjects, createProjectForm, deleteProjectForm, homePage, createProjectsFromStorageDOM}