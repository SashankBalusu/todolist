import createForm, {createTask, deleteForm, createScreen, createProjects, createProjectForm, deleteProjectForm, homePage, createProjectsFromStorageDOM} from "./DOM.js"
import todoitem from "./objcreate.js"
homePage()
const continueToApp = document.querySelector("#continue")
continueToApp.addEventListener("click", function(){
    continueToApp.setAttribute("style", "display:none;")
    createScreen()
    let arr = createScreenFromLocalStorage()
    let todoList = []
    let projects = []
    if (arr[0] != null) {
        todoList = arr[0]
    }
    if (arr[1] != null) {
        projects = arr[1]
    }
    
    const addtask = document.querySelector("#addtask")
    const addProject = document.querySelector("#addProject")
    let titleValue
    let descriptionValue
    let dueValue
    let priorityValue
    let projectValue
    
    let numForms = 0
    addtask.addEventListener("mouseover", function(){
        addtask.setAttribute("style", "width: 200px")
        addtask.textContent = "Add Task"
    })
    addtask.addEventListener("mouseout", function(){
        addtask.setAttribute("style", "width: 80px")
        addtask.textContent = "+"
    })
    addProject.addEventListener("mouseover", function(){
        addProject.setAttribute("style", "width: 200px")
        setTimeout(function(){
            addProject.textContent = "Add Project"
        }, 50)
    })
    addProject.addEventListener("mouseout", function(){
        addProject.setAttribute("style", "width: 80px")
        addProject.textContent = "+"
    })
    addtask.addEventListener("click", function(){
        if (!(numForms)){
            const body = document.querySelector("body")
            const projectsdiv = document.querySelector("#projects")
            body.style.backgroundColor = "rgba(31, 40, 51, 0.5)"
            projectsdiv.style.backgroundColor = "rgba(197, 198, 199, 0.5)"
            // projectsdiv.setAttribute("style", "opacity:70%;z-index:1")
            //create form
            console.log("hi")
            createForm()
            numForms ++;
            console.log("hi")
            //factory function with form parameters
            submission()
            //Make todo item visible
        }
        

    })
    
    addProject.addEventListener("click", function(){
        if (!(numForms)){
            numForms++
            createProjectForm()
            projectSubmission()
        }
        
        //createprojectform
        })
    function submission(){
        const submit = document.querySelector("#submit")
        const title = document.querySelector("#title")
        const description = document.querySelector("#description")
        const due = document.querySelector("#due")
        const priority = document.querySelector("#priority")
        const project = document.querySelector("#project")
        submit.addEventListener("click", function(){
            console.log("hi")
            titleValue = title.value
            descriptionValue = description.value
            dueValue = due.value
            priorityValue = priority.value
            projectValue = project.value
            console.log(projectValue)
            if (projects.indexOf(projectValue) == -1){
                projects.push(projectValue)
                localStorage.setItem("projects", JSON.stringify(projects))
                createProjects(projects)
            }
            const date = new Date().getFullYear()
            if (Number(dueValue.slice(0,4))< Number(date) ){
                due.setCustomValidity("Invalid field.");
            }
            else {
                deleteForm()
                todoList.push(todoitem(titleValue, descriptionValue, dueValue, priorityValue, projectValue))
                localStorage.setItem("todoList", JSON.stringify(todoList))
                createTask(todoList)
                numForms--
                const xOut = document.querySelectorAll(".xOut")
                xOut.forEach(function(elem){
                    elem.addEventListener("click", function(){
                        let xOutID = elem.getAttribute("id").slice(5)
                        todoList.splice(xOutID, 1)
                        localStorage.setItem("todoList", JSON.stringify(todoList))
                    })
                })
            }
            
            
            // content.setAttribute("style", "opacity:100%;z-index:1")
            // projectsdiv.setAttribute("style", "opacity:100%; z-index:1;")

        })

    }
    function projectSubmission(){
        const submitProject = document.querySelector("#submitProjectForm")
        const projectSubmissionName = document.querySelector("#projectSubmissionName")
        submitProject.addEventListener("click", function(){
            projects.push(projectSubmissionName.value)
            localStorage.setItem("projects", JSON.stringify(projects))
            createProjects(projects)
            deleteProjectForm()
            numForms--
        })
    }
})
function createScreenFromLocalStorage(){
    let createProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));
    if (createProjectsFromStorage != null){
        let projLength = createProjectsFromStorage.length
        for (let i = 0; i < projLength; i++){
            createProjectsFromStorageDOM(createProjectsFromStorage, "true")
        }
    }
    let createTasksFromStorage = JSON.parse(localStorage.getItem("todoList"));
    if (createTasksFromStorage != null){
        createTask(createTasksFromStorage)
        const xOut = document.querySelectorAll(".xOut")
        xOut.forEach(function(elem){
            elem.addEventListener("click", function(){
                let xOutID = elem.getAttribute("id").slice(5)
                createTasksFromStorage.splice(xOutID, 1)
                localStorage.setItem("todoList", JSON.stringify(createTasksFromStorage))
            })
        })
    }
    return [createTasksFromStorage, createProjectsFromStorage]
}
