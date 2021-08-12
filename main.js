/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createForm),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "deleteForm": () => (/* binding */ deleteForm),
/* harmony export */   "createScreen": () => (/* binding */ createScreen),
/* harmony export */   "createProjects": () => (/* binding */ createProjects),
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "deleteProjectForm": () => (/* binding */ deleteProjectForm),
/* harmony export */   "homePage": () => (/* binding */ homePage),
/* harmony export */   "createProjectsFromStorageDOM": () => (/* binding */ createProjectsFromStorageDOM)
/* harmony export */ });
/* harmony import */ var _objcreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objcreate.js */ "./src/objcreate.js");


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
    const priority = document.createElement("select")
    //priority.type = "number"
    //priority.placeholder = "Priority"
    priority.id = "priority"
    
    //priority.setAttribute("required", "");
    form.appendChild(priority)
    const selectOption = document.createElement("option")
    selectOption.textContent = "--Select a priority--"
    priority.appendChild(selectOption)
    const low = document.createElement("option")
    low.textContent = "Low"
    priority.appendChild(low)
    const med = document.createElement("option")
    med.textContent = "Medium"
    priority.appendChild(med)
    const high = document.createElement("option")
    high.textContent = "High"
    priority.appendChild(high)
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
function createFormToEditTask (divID, titVal, desVal, dueVal, priVal){
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
    const closeForm = document.createElement("button")
    closeForm.textContent = "Cancel"
    form.appendChild(closeForm)
    closeForm.addEventListener("click", deleteForm)
    const title = document.createElement("input")
    title.type = "text"
    title.value = titVal
    title.id = "title"
    //title.setAttribute("required", "");
    form.appendChild(title)
    const description = document.createElement("input")
    description.type = "text"
    description.value = desVal
    description.id = "description"
    form.appendChild(description) 
    const due = document.createElement("input")
    due.type = "date"
    due.id = "due"
    due.value = dueVal
    //due.setAttribute("required", "");
    form.appendChild(due)
    const priority = document.createElement("select")
    //priority.type = "number"
    //priority.placeholder = "Priority"
    priority.id = "priority"
    
    //priority.setAttribute("required", "");
    form.appendChild(priority)
    const selectOption = document.createElement("option")
    selectOption.textContent = "--Select a priority--"
    priority.appendChild(selectOption)
    const low = document.createElement("option")
    low.textContent = "Low"
    priority.appendChild(low)
    const med = document.createElement("option")
    med.textContent = "Medium"
    priority.appendChild(med)
    const high = document.createElement("option")
    high.textContent = "High"
    priority.appendChild(high)
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
    submit.id = "submitEdit"
    form.appendChild(submit)
    submit.addEventListener("click", function() {
        let titleValue = title.value
        let descriptionValue = description.value
        let dueValue = due.value
        let priorityValue = priority.value
        let projectValue = project.value
        const date = new Date().getFullYear()
        if (Number(dueValue.slice(0,4))< Number(date) ){
            due.setCustomValidity("Invalid field.");
        }
        else {
            deleteForm()
            localList[divID] = ((0,_objcreate_js__WEBPACK_IMPORTED_MODULE_0__.default)(titleValue, descriptionValue, dueValue, priorityValue, projectValue))
            localStorage.setItem("todoList", JSON.stringify(localList))
            createTask(localList)
        }
        //Cant change project rn, to add back simply check if project exists rn
         
    })
    

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
        if (item.priorities != "--Select a priority--"){
            priority.textContent = item.priorities
            console.log(priority.textContent)
        }
        else {
            priority.textContent = ""
        }
        div.appendChild(priority)
        
        if (item.priorities == "Low"){
            div.setAttribute("style", "background:green;")
        }
        else if (item.priorities == "Medium"){
            div.setAttribute("style", "background:orange;")
        }
        else if (item.priorities == "High"){
            div.setAttribute("style", "background:red;")
        }

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
        div.addEventListener("click", function(){
            createFormToEditTask(i, title.textContent, des.textContent, due.textContent, priority.textContent)
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
            if (item.priorities != "--Select a priority--"){
                priority.textContent = item.priorities
                console.log(priority.textContent)
            }
            else {
                priority.textContent = ""
            }
            div.appendChild(priority)
            if (item.priorities == "Low"){
                div.setAttribute("style", "background:green;")
            }
            else if (item.priorities == "Medium"){
                div.setAttribute("style", "background:orange;")
            }
            else if (item.priorities == "High"){
                div.setAttribute("style", "background:red;")
            }
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
            div.addEventListener("click", function(){
                createFormToEditTask(i, title.textContent, des.textContent, due.textContent, priority.textContent)
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


/***/ }),

/***/ "./src/objcreate.js":
/*!**************************!*\
  !*** ./src/objcreate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoitem)
/* harmony export */ });
const todoitem = (title, description, dueDate, priority, project) =>{
    let titles = title
    let descriptions = description
    let dueDates = dueDate
    let priorities = priority
    let projects = project
    return {titles, descriptions, dueDates, priorities, projects}
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _objcreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objcreate.js */ "./src/objcreate.js");


(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.homePage)()
const continueToApp = document.querySelector("#continue")
continueToApp.addEventListener("click", function(){
    continueToApp.setAttribute("style", "display:none;")
    ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createScreen)()
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
            ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.default)()
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
            ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createProjectForm)()
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
                ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createProjects)(projects)
            }
            const date = new Date().getFullYear()
            if (Number(dueValue.slice(0,4))< Number(date) ){
                due.setCustomValidity("Invalid field.");
            }
            else {
                (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.deleteForm)()
                todoList.push((0,_objcreate_js__WEBPACK_IMPORTED_MODULE_1__.default)(titleValue, descriptionValue, dueValue, priorityValue, projectValue))
                localStorage.setItem("todoList", JSON.stringify(todoList))
                ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(todoList)
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
            ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createProjects)(projects)
            ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.deleteProjectForm)()
            numForms--
        })
    }
})
function createScreenFromLocalStorage(){
    let createProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));
    if (createProjectsFromStorage != null){
        let projLength = createProjectsFromStorage.length
        for (let i = 0; i < projLength; i++){
            (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createProjectsFromStorageDOM)(createProjectsFromStorage, "true")
        }
    }
    let createTasksFromStorage = JSON.parse(localStorage.getItem("todoList"));
    if (createTasksFromStorage != null){
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(createTasksFromStorage)
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvb2JqY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0EsWUFBWSxpREFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBaUI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFVO0FBQzFCLDhCQUE4QixzREFBUTtBQUN0QztBQUNBLGdCQUFnQixvREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7OztBQUdBLDJEQUEyRDtBQUMzRCwrREFBK0QsV0FBVzs7QUFFMUUsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWM7QUFDMUIsWUFBWSwyREFBaUI7QUFDN0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDLFlBQVkscUVBQTRCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG9pdGVtIGZyb20gXCIuL29iamNyZWF0ZS5qc1wiXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxubGV0IGxvY2FsTGlzdCA9IFtdXG5sZXQgcHJvamVjdFZhbHVlID0gbnVsbFxuZnVuY3Rpb24gY3JlYXRlRm9ybSAoKXtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpID09IG51bGwpe1xuICAgICAgICAvLyBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpXG4gICAgICAgIC8vIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OmJsb2NrO1wiKVxuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9IFwiZm9ybUNvbnRhaW5lclwiXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIC8vZm9ybS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInotaW5kZXg6MlwiKVxuICAgIGlmIChsb2NhbExpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0b3A6MDtcIilcbiAgICB9XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgdGl0bGUudHlwZSA9IFwidGV4dFwiXG4gICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCJcbiAgICB0aXRsZS5pZCA9IFwidGl0bGVcIlxuICAgIC8vdGl0bGUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGRlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIlxuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiXG4gICAgZGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKSBcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBkdWUudHlwZSA9IFwiZGF0ZVwiXG4gICAgZHVlLmlkID0gXCJkdWVcIlxuICAgIC8vZHVlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxuICAgIC8vcHJpb3JpdHkudHlwZSA9IFwibnVtYmVyXCJcbiAgICAvL3ByaW9yaXR5LnBsYWNlaG9sZGVyID0gXCJQcmlvcml0eVwiXG4gICAgcHJpb3JpdHkuaWQgPSBcInByaW9yaXR5XCJcbiAgICBcbiAgICAvL3ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IFwiLS1TZWxlY3QgYSBwcmlvcml0eS0tXCJcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RPcHRpb24pXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIGxvdy50ZXh0Q29udGVudCA9IFwiTG93XCJcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3cpXG4gICAgY29uc3QgbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIG1lZC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCJcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWQpXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBoaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCJcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoKVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBwcm9qZWN0LnR5cGUgPSBcInRleHRcIlxuICAgIGlmIChwcm9qZWN0VmFsdWUpe1xuICAgICAgICBwcm9qZWN0LnZhbHVlID0gcHJvamVjdFZhbHVlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IE5hbWVcIlxuICAgIH1cbiAgICBwcm9qZWN0LmlkID0gXCJwcm9qZWN0XCJcbiAgICAvL3Byb2plY3Quc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIlxuICAgIHN1Ym1pdC52YWx1ZSA9IFwic3VibWl0XCJcbiAgICBzdWJtaXQuaWQgPSBcInN1Ym1pdFwiXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG4gICAgXG5cblxufVxuZnVuY3Rpb24gZGVsZXRlRm9ybSgpe1xuICAgIC8vIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1Db250YWluZXJcIilcbiAgICAvLyBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lO1wiKVxuICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBsZXQgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7IFxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGUpXG59XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpe1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtQ29udGFpbmVyXCIpID09IG51bGwpe1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXYuaWQgPSBcInByb2plY3RGb3JtQ29udGFpbmVyXCJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgfVxuICAgIGxldCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1Db250YWluZXJcIilcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgcHJvamVjdC50eXBlID0gXCJ0ZXh0XCJcbiAgICBwcm9qZWN0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IE5hbWVcIlxuICAgIHByb2plY3QuaWQgPSBcInByb2plY3RTdWJtaXNzaW9uTmFtZVwiXG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCJcbiAgICBzdWJtaXQudmFsdWUgPSBcInN1Ym1pdFwiXG4gICAgc3VibWl0LmlkID0gXCJzdWJtaXRQcm9qZWN0Rm9ybVwiXG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0KVxuICAgIC8vIG1ha2UgZm9ybSwgZGVsZXRlIGZvcm0gb24gc3VibWl0LlxufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZvcm0oKXtcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1Db250YWluZXJcIilcbiAgICBsZXQgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7IFxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1Ub0VkaXRUYXNrIChkaXZJRCwgdGl0VmFsLCBkZXNWYWwsIGR1ZVZhbCwgcHJpVmFsKXtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpID09IG51bGwpe1xuICAgICAgICAvLyBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpXG4gICAgICAgIC8vIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OmJsb2NrO1wiKVxuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9IFwiZm9ybUNvbnRhaW5lclwiXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIC8vZm9ybS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInotaW5kZXg6MlwiKVxuICAgIGlmIChsb2NhbExpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0b3A6MDtcIilcbiAgICB9XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjbG9zZUZvcm0udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUZvcm0pXG4gICAgY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVGb3JtKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgdGl0bGUudHlwZSA9IFwidGV4dFwiXG4gICAgdGl0bGUudmFsdWUgPSB0aXRWYWxcbiAgICB0aXRsZS5pZCA9IFwidGl0bGVcIlxuICAgIC8vdGl0bGUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGRlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIlxuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gZGVzVmFsXG4gICAgZGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKSBcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBkdWUudHlwZSA9IFwiZGF0ZVwiXG4gICAgZHVlLmlkID0gXCJkdWVcIlxuICAgIGR1ZS52YWx1ZSA9IGR1ZVZhbFxuICAgIC8vZHVlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxuICAgIC8vcHJpb3JpdHkudHlwZSA9IFwibnVtYmVyXCJcbiAgICAvL3ByaW9yaXR5LnBsYWNlaG9sZGVyID0gXCJQcmlvcml0eVwiXG4gICAgcHJpb3JpdHkuaWQgPSBcInByaW9yaXR5XCJcbiAgICBcbiAgICAvL3ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IFwiLS1TZWxlY3QgYSBwcmlvcml0eS0tXCJcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RPcHRpb24pXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIGxvdy50ZXh0Q29udGVudCA9IFwiTG93XCJcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3cpXG4gICAgY29uc3QgbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIG1lZC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCJcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWQpXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBoaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCJcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoKVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBwcm9qZWN0LnR5cGUgPSBcInRleHRcIlxuICAgIGlmIChwcm9qZWN0VmFsdWUpe1xuICAgICAgICBwcm9qZWN0LnZhbHVlID0gcHJvamVjdFZhbHVlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IE5hbWVcIlxuICAgIH1cbiAgICBwcm9qZWN0LmlkID0gXCJwcm9qZWN0XCJcbiAgICAvL3Byb2plY3Quc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIlxuICAgIHN1Ym1pdC52YWx1ZSA9IFwic3VibWl0XCJcbiAgICBzdWJtaXQuaWQgPSBcInN1Ym1pdEVkaXRcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gdGl0bGUudmFsdWVcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkZXNjcmlwdGlvbi52YWx1ZVxuICAgICAgICBsZXQgZHVlVmFsdWUgPSBkdWUudmFsdWVcbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eS52YWx1ZVxuICAgICAgICBsZXQgcHJvamVjdFZhbHVlID0gcHJvamVjdC52YWx1ZVxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgICAgIGlmIChOdW1iZXIoZHVlVmFsdWUuc2xpY2UoMCw0KSk8IE51bWJlcihkYXRlKSApe1xuICAgICAgICAgICAgZHVlLnNldEN1c3RvbVZhbGlkaXR5KFwiSW52YWxpZCBmaWVsZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGVGb3JtKClcbiAgICAgICAgICAgIGxvY2FsTGlzdFtkaXZJRF0gPSAodG9kb2l0ZW0odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZHVlVmFsdWUsIHByaW9yaXR5VmFsdWUsIHByb2plY3RWYWx1ZSkpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsTGlzdCkpXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGxvY2FsTGlzdClcbiAgICAgICAgfVxuICAgICAgICAvL0NhbnQgY2hhbmdlIHByb2plY3Qgcm4sIHRvIGFkZCBiYWNrIHNpbXBseSBjaGVjayBpZiBwcm9qZWN0IGV4aXN0cyByblxuICAgICAgICAgXG4gICAgfSlcbiAgICBcblxufVxuZnVuY3Rpb24gY3JlYXRlVGFzayh0b2RvTGlzdCl7XG4gICAgbG9jYWxMaXN0ID0gdG9kb0xpc3RcbiAgICBkZWxldGVUYXNrcygpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lci5pZCA9IFwidGFza0NvbnRhaW5lclwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPHRvZG9MaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvVGFza1wiKVxuICAgICAgICBkaXYuaWQgPSBcInRhc2tcIiArIGk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIGxldCBpdGVtID0gdG9kb0xpc3RbaV1cbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxMaXN0KVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZXNcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICBjb25zdCBkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBkZXMudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uc1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzKVxuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBkdWUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGVzXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkdWUpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdGllcyAhPSBcIi0tU2VsZWN0IGEgcHJpb3JpdHktLVwiKXtcbiAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gaXRlbS5wcmlvcml0aWVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eS50ZXh0Q29udGVudClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICAgICAgXG4gICAgICAgIGlmIChpdGVtLnByaW9yaXRpZXMgPT0gXCJMb3dcIil7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOmdyZWVuO1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ucHJpb3JpdGllcyA9PSBcIk1lZGl1bVwiKXtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6b3JhbmdlO1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ucHJpb3JpdGllcyA9PSBcIkhpZ2hcIil7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOnJlZDtcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHhPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIHhPdXQudGV4dENvbnRlbnQgPSBcInhcIlxuICAgICAgICB4T3V0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgYm9yZGVyOm5vbmU7XCIpXG4gICAgICAgIHhPdXQuaWQgPSBcImNsb3NlXCIgICsgaVxuICAgICAgICB4T3V0LmNsYXNzTGlzdC5hZGQoXCJ4T3V0XCIpXG4gICAgICAgIHhPdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgeE91dElEID0geE91dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zbGljZSg1KVxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1wiICsgeE91dElEKVxuICAgICAgICAgICAgZGl2LnJlbW92ZSgpXG4gICAgICAgICAgICBsb2NhbExpc3Quc3BsaWNlKHhPdXRJRCwgMSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKVxuICAgICAgICB9KVxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjcmVhdGVGb3JtVG9FZGl0VGFzayhpLCB0aXRsZS50ZXh0Q29udGVudCwgZGVzLnRleHRDb250ZW50LCBkdWUudGV4dENvbnRlbnQsIHByaW9yaXR5LnRleHRDb250ZW50KVxuICAgICAgICB9KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoeE91dClcbiAgICB9XG5cbiAgICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChcIisgdG9kb0xpc3QubGVuZ3RoK1wiLCAxMDBweCk7IGRpc3BsYXk6Z3JpZDtcIilcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNwZWNpZmljVGFzayhuYW1lKXtcbiAgICBkZWxldGVUYXNrcygpXG4gICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lci5pZCA9IFwidGFza0NvbnRhaW5lclwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPGxvY2FsTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChsb2NhbExpc3RbaV0ucHJvamVjdHMgPT0gbmFtZSl7XG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1Rhc2tcIilcbiAgICAgICAgICAgIGRpdi5pZCA9IFwidGFza1wiICsgaVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgICAgIGxldCBpdGVtID0gbG9jYWxMaXN0W2ldXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGVzXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgICAgICBjb25zdCBkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgZGVzLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbnNcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXMpXG4gICAgICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgZHVlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlc1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGR1ZSlcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgIGlmIChpdGVtLnByaW9yaXRpZXMgIT0gXCItLVNlbGVjdCBhIHByaW9yaXR5LS1cIil7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBpdGVtLnByaW9yaXRpZXNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eS50ZXh0Q29udGVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdGllcyA9PSBcIkxvd1wiKXtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOmdyZWVuO1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5wcmlvcml0aWVzID09IFwiTWVkaXVtXCIpe1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6b3JhbmdlO1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5wcmlvcml0aWVzID09IFwiSGlnaFwiKXtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOnJlZDtcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHhPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgICAgICB4T3V0LnRleHRDb250ZW50ID0gXCJ4XCJcbiAgICAgICAgICAgIHhPdXQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyBib3JkZXI6bm9uZTtcIilcbiAgICAgICAgICAgIHhPdXQuaWQgPSBcImNsb3NlXCIgICsgaVxuICAgICAgICAgICAgeE91dC5jbGFzc0xpc3QuYWRkKFwieE91dFwiKVxuICAgICAgICAgICAgeE91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgeE91dElEID0geE91dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zbGljZSg1KVxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tcIiArIHhPdXRJRClcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBsb2NhbExpc3Quc3BsaWNlKHhPdXRJRCwgMSlcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsTGlzdCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNyZWF0ZUZvcm1Ub0VkaXRUYXNrKGksIHRpdGxlLnRleHRDb250ZW50LCBkZXMudGV4dENvbnRlbnQsIGR1ZS50ZXh0Q29udGVudCwgcHJpb3JpdHkudGV4dENvbnRlbnQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHhPdXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXCIrIGNvdW50ZXIrXCIsIDEwMHB4KTsgZGlzcGxheTpncmlkO1wiKVxuXG59XG5mdW5jdGlvbiBkZWxldGVUYXNrcygpe1xuICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrQ29udGFpbmVyXCIpXG4gICAgaWYgKGUgPT0gbnVsbCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibnVsbCwgZXhpdGVkXCIpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGRcbiAgICB3aGlsZShjaGlsZCl7XG4gICAgICAgIGUucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gICAgICAgIGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkXG4gICAgfVxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZSlcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNjcmVlbigpe1xuICAgIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OmdyaWQ7XCIpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuaWQgPSBcInByb2plY3RzXCJcbiAgICBib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpncmlkO1wiKVxuICAgIGNvbnN0IHBhcnRpY2xlc2pzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXJ0aWNsZXMtanNcIilcbiAgICBwYXJ0aWNsZXNqcy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcbiAgICBjb25zdCBjb250aW51ZVRvQXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250aW51ZVRvQXBwQ29udGFpbmVyXCIpXG4gICAgY29udGludWVUb0FwcENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZTtcIilcblxuICAgIFxuXG4gICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgYWRkUHJvamVjdC5pZCA9IFwiYWRkUHJvamVjdFwiXG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm1hcmdpbi1sZWZ0OjIwcHhcIilcbiAgICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcbiAgICBsZXQgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdEJ1dHRvbnMuaWQgPSBcInByb2plY3RCdXR0b25zXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpXG5cbiAgICBsZXQgcHJvakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgcHJvakxhYmVsLmlkID0gXCJwcm9qZWN0TGFiZWxcIlxuICAgIHByb2pMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKHByb2pMYWJlbClcbiAgICBsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYWxsVGFza3MudGV4dENvbnRlbnQgPSBcIkFsbCBUYXNrc1wiXG4gICAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZChcInByb2J1dFwiKVxuICAgIGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9idXRcIik7XG4gICAgICAgIGlmICh4KXtcbiAgICAgICAgICAgIHguZm9yRWFjaChmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXJSaWdodCA9IFwibm9uZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYWxsVGFza3Muc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItcmlnaHQ6IHNvbGlkICM2NkZDRjFcIilcbiAgICAgICAgcHJvamVjdEJ1dHRvbkV2ZW50TGlzdGVuZXIoYWxsVGFza3MudGV4dENvbnRlbnQpXG4gICAgfSlcbiAgICBhbGxUYXNrcy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IG5vbmU7IGJvcmRlci1yaWdodDpzb2xpZCAjNjZGQ0YxXCIpXG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3MpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKHByb2plY3RzKXtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0QnV0dG9uc1wiKVxuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2J1dFwiKVxuICAgIHByb2plY3QuaWQgPSBcInByb2plY3RcIiArIHByb2plY3RzLmxlbmd0aFxuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGgtMV1cbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGJvcmRlcjogbm9uZTttYXJnaW4tdG9wOiBcIiArIE1hdGguYWJzKHByb2plY3RzLmxlbmd0aCAqNjArIDYwKSArIFwicHhcIilcbiAgICBcbiAgICAvL3Byb2plY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJtYXJnaW4tdG9wOiBcIiArIE1hdGguYWJzKHByb2plY3RzLmxlbmd0aCAqNjArIDYwKSArIFwicHhcIilcbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAvL3Byb2plY3QuYm9yZGVyID0gXCJzb2xpZCAjNjZGQ0YxXCJcbiAgICAgICAgLy8gbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RCdXR0b25zXCIpXG4gICAgICAgIC8vIGxldCBjaGlsZCA9IGUubGFzdEVsZW1lbnRDaGlsZDsgXG4gICAgICAgIC8vIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAvLyAgICAgY2hpbGQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItcmlnaHQ6bm9uZTtcIilcbiAgICAgICAgLy8gICAgIGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkOyBcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvYnV0XCIpO1xuICAgICAgICB4LmZvckVhY2goZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXJSaWdodCA9IFwibm9uZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcHJvamVjdElEID0gcHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zbGljZSg3KVxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLXJpZ2h0OiBzb2xpZCAjNjZGQ0YxOyBtYXJnaW4tdG9wOiBcIiArIE1hdGguYWJzKChwcm9qZWN0cy5pbmRleE9mKHByb2plY3QudGV4dENvbnRlbnQpICsxKSAqNjAgKyA2MCkgKyBcInB4XCIpXG4gICAgICAgIHByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKHByb2plY3QudGV4dENvbnRlbnQpXG4gICAgfSlcbiAgICBcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzRnJvbVN0b3JhZ2VET00gKHByb2plY3RzKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEJ1dHRvbnNcIilcbiAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2J1dFwiKVxuICAgICAgICBwcm9qZWN0LmlkID0gXCJwcm9qZWN0XCIgKyBpXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXVxuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGJvcmRlcjogbm9uZTttYXJnaW4tdG9wOiBcIiArIE1hdGguYWJzKChpKzEpICo2MCsgNjApICsgXCJweFwiKVxuICAgICAgICBcbiAgICAgICAgLy9wcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwibWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicyhwcm9qZWN0cy5sZW5ndGggKjYwKyA2MCkgKyBcInB4XCIpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy9wcm9qZWN0LmJvcmRlciA9IFwic29saWQgIzY2RkNGMVwiXG4gICAgICAgICAgICAvLyBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEJ1dHRvbnNcIilcbiAgICAgICAgICAgIC8vIGxldCBjaGlsZCA9IGUubGFzdEVsZW1lbnRDaGlsZDsgXG4gICAgICAgICAgICAvLyB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIC8vICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1yaWdodDpub25lO1wiKVxuICAgICAgICAgICAgLy8gICAgIGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkOyBcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9idXRcIik7XG4gICAgICAgICAgICB4LmZvckVhY2goZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyUmlnaHQgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLXJpZ2h0OiBzb2xpZCAjNjZGQ0YxOyBtYXJnaW4tdG9wOiBcIiArIE1hdGguYWJzKChpKzEpICo2MCArIDYwKSArIFwicHhcIilcbiAgICAgICAgICAgIHByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKHByb2plY3QudGV4dENvbnRlbnQpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cbi8vYWRkIHRvIG5ldyBtb2R1bGUgZm9yIGV2ZW50IGxpc3RlbmVycyBldmVudHVhbGx5XG5cbmZ1bmN0aW9uIHByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKG5hbWUpe1xuICAgIGlmIChuYW1lID09IFwiQWxsIFRhc2tzXCIpe1xuICAgICAgICBjcmVhdGVUYXNrKGxvY2FsTGlzdClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByb2plY3RWYWx1ZSA9IG5hbWVcbiAgICAgICAgY3JlYXRlU3BlY2lmaWNUYXNrKG5hbWUpXG4gICAgfVxufVxuZnVuY3Rpb24gaG9tZVBhZ2UgKCl7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5pZCA9IFwiY29udGludWVUb0FwcENvbnRhaW5lclwiXG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgbGV0IGludHJvVG9BcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBpbnRyb1RvQXBwLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIHRoaXMgdG9kbyBsaXN0IGFwcC4gTGV0J3MgZ2V0IG9yZ2FuaXplZCFcIlxuICAgIGludHJvVG9BcHAuaWQgPSBcImludHJvVG9BcHBcIlxuICAgIGludHJvVG9BcHAuc3R5bGUuY29sb3IgPSBcIndoaXRlXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW50cm9Ub0FwcClcbiAgICBsZXQgY29udGludWVUb0FwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb250aW51ZVRvQXBwLmlkID0gXCJjb250aW51ZVwiXG4gICAgY29udGludWVUb0FwcC50ZXh0Q29udGVudCA9IFwiQ29udGludWUgdG8gQXBwXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGludWVUb0FwcClcbn1cbmV4cG9ydCB7Y3JlYXRlRm9ybSBhcyBkZWZhdWx0LCBjcmVhdGVUYXNrLCBkZWxldGVGb3JtLCBjcmVhdGVTY3JlZW4sIGNyZWF0ZVByb2plY3RzLCBjcmVhdGVQcm9qZWN0Rm9ybSwgZGVsZXRlUHJvamVjdEZvcm0sIGhvbWVQYWdlLCBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlRE9NfSIsImNvbnN0IHRvZG9pdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+e1xuICAgIGxldCB0aXRsZXMgPSB0aXRsZVxuICAgIGxldCBkZXNjcmlwdGlvbnMgPSBkZXNjcmlwdGlvblxuICAgIGxldCBkdWVEYXRlcyA9IGR1ZURhdGVcbiAgICBsZXQgcHJpb3JpdGllcyA9IHByaW9yaXR5XG4gICAgbGV0IHByb2plY3RzID0gcHJvamVjdFxuICAgIHJldHVybiB7dGl0bGVzLCBkZXNjcmlwdGlvbnMsIGR1ZURhdGVzLCBwcmlvcml0aWVzLCBwcm9qZWN0c31cbn07XG5leHBvcnQge3RvZG9pdGVtIGFzIGRlZmF1bHR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlRm9ybSwge2NyZWF0ZVRhc2ssIGRlbGV0ZUZvcm0sIGNyZWF0ZVNjcmVlbiwgY3JlYXRlUHJvamVjdHMsIGNyZWF0ZVByb2plY3RGb3JtLCBkZWxldGVQcm9qZWN0Rm9ybSwgaG9tZVBhZ2UsIGNyZWF0ZVByb2plY3RzRnJvbVN0b3JhZ2VET019IGZyb20gXCIuL0RPTS5qc1wiXG5pbXBvcnQgdG9kb2l0ZW0gZnJvbSBcIi4vb2JqY3JlYXRlLmpzXCJcbmhvbWVQYWdlKClcbmNvbnN0IGNvbnRpbnVlVG9BcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRpbnVlXCIpXG5jb250aW51ZVRvQXBwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGNvbnRpbnVlVG9BcHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmU7XCIpXG4gICAgY3JlYXRlU2NyZWVuKClcbiAgICBsZXQgYXJyID0gY3JlYXRlU2NyZWVuRnJvbUxvY2FsU3RvcmFnZSgpXG4gICAgbGV0IHRvZG9MaXN0ID0gW11cbiAgICBsZXQgcHJvamVjdHMgPSBbXVxuICAgIGlmIChhcnJbMF0gIT0gbnVsbCkge1xuICAgICAgICB0b2RvTGlzdCA9IGFyclswXVxuICAgIH1cbiAgICBpZiAoYXJyWzFdICE9IG51bGwpIHtcbiAgICAgICAgcHJvamVjdHMgPSBhcnJbMV1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgYWRkdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkdGFza1wiKVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIilcbiAgICBsZXQgdGl0bGVWYWx1ZVxuICAgIGxldCBkZXNjcmlwdGlvblZhbHVlXG4gICAgbGV0IGR1ZVZhbHVlXG4gICAgbGV0IHByaW9yaXR5VmFsdWVcbiAgICBsZXQgcHJvamVjdFZhbHVlXG4gICAgXG4gICAgbGV0IG51bUZvcm1zID0gMFxuICAgIGFkZHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpe1xuICAgICAgICBhZGR0YXNrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDIwMHB4XCIpXG4gICAgICAgIGFkZHRhc2sudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCJcbiAgICB9KVxuICAgIGFkZHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGFkZHRhc2suc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogODBweFwiKVxuICAgICAgICBhZGR0YXNrLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICB9KVxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpe1xuICAgICAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDIwMHB4XCIpXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCJcbiAgICAgICAgfSwgNTApXG4gICAgfSlcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpe1xuICAgICAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDgwcHhcIilcbiAgICAgICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgfSlcbiAgICBhZGR0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoIShudW1Gb3Jtcykpe1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIilcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDMxLCA0MCwgNTEsIDAuNSlcIlxuICAgICAgICAgICAgcHJvamVjdHNkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDE5NywgMTk4LCAxOTksIDAuNSlcIlxuICAgICAgICAgICAgLy8gcHJvamVjdHNkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvcGFjaXR5OjcwJTt6LWluZGV4OjFcIilcbiAgICAgICAgICAgIC8vY3JlYXRlIGZvcm1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICAgICAgICAgIGNyZWF0ZUZvcm0oKVxuICAgICAgICAgICAgbnVtRm9ybXMgKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpXG4gICAgICAgICAgICAvL2ZhY3RvcnkgZnVuY3Rpb24gd2l0aCBmb3JtIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIHN1Ym1pc3Npb24oKVxuICAgICAgICAgICAgLy9NYWtlIHRvZG8gaXRlbSB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9KVxuICAgIFxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICghKG51bUZvcm1zKSl7XG4gICAgICAgICAgICBudW1Gb3JtcysrXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpXG4gICAgICAgICAgICBwcm9qZWN0U3VibWlzc2lvbigpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vY3JlYXRlcHJvamVjdGZvcm1cbiAgICAgICAgfSlcbiAgICBmdW5jdGlvbiBzdWJtaXNzaW9uKCl7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIilcbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVcIilcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIilcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKVxuICAgICAgICAgICAgdGl0bGVWYWx1ZSA9IHRpdGxlLnZhbHVlXG4gICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlID0gZGVzY3JpcHRpb24udmFsdWVcbiAgICAgICAgICAgIGR1ZVZhbHVlID0gZHVlLnZhbHVlXG4gICAgICAgICAgICBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHkudmFsdWVcbiAgICAgICAgICAgIHByb2plY3RWYWx1ZSA9IHByb2plY3QudmFsdWVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZSlcbiAgICAgICAgICAgIGlmIChwcm9qZWN0cy5pbmRleE9mKHByb2plY3RWYWx1ZSkgPT0gLTEpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdFZhbHVlKVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RzKHByb2plY3RzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgaWYgKE51bWJlcihkdWVWYWx1ZS5zbGljZSgwLDQpKTwgTnVtYmVyKGRhdGUpICl7XG4gICAgICAgICAgICAgICAgZHVlLnNldEN1c3RvbVZhbGlkaXR5KFwiSW52YWxpZCBmaWVsZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGVGb3JtKClcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG9pdGVtKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0VmFsdWUpKVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKVxuICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2sodG9kb0xpc3QpXG4gICAgICAgICAgICAgICAgbnVtRm9ybXMtLVxuICAgICAgICAgICAgICAgIGNvbnN0IHhPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnhPdXRcIilcbiAgICAgICAgICAgICAgICB4T3V0LmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeE91dElEID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zbGljZSg1KVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKHhPdXRJRCwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29udGVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm9wYWNpdHk6MTAwJTt6LWluZGV4OjFcIilcbiAgICAgICAgICAgIC8vIHByb2plY3RzZGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eToxMDAlOyB6LWluZGV4OjE7XCIpXG5cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9qZWN0U3VibWlzc2lvbigpe1xuICAgICAgICBjb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRQcm9qZWN0Rm9ybVwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0U3VibWlzc2lvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTdWJtaXNzaW9uTmFtZVwiKVxuICAgICAgICBzdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0U3VibWlzc2lvbk5hbWUudmFsdWUpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RzKHByb2plY3RzKVxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEZvcm0oKVxuICAgICAgICAgICAgbnVtRm9ybXMtLVxuICAgICAgICB9KVxuICAgIH1cbn0pXG5mdW5jdGlvbiBjcmVhdGVTY3JlZW5Gcm9tTG9jYWxTdG9yYWdlKCl7XG4gICAgbGV0IGNyZWF0ZVByb2plY3RzRnJvbVN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGlmIChjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlICE9IG51bGwpe1xuICAgICAgICBsZXQgcHJvakxlbmd0aCA9IGNyZWF0ZVByb2plY3RzRnJvbVN0b3JhZ2UubGVuZ3RoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvakxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RzRnJvbVN0b3JhZ2VET00oY3JlYXRlUHJvamVjdHNGcm9tU3RvcmFnZSwgXCJ0cnVlXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNyZWF0ZVRhc2tzRnJvbVN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGlmIChjcmVhdGVUYXNrc0Zyb21TdG9yYWdlICE9IG51bGwpe1xuICAgICAgICBjcmVhdGVUYXNrKGNyZWF0ZVRhc2tzRnJvbVN0b3JhZ2UpXG4gICAgICAgIGNvbnN0IHhPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnhPdXRcIilcbiAgICAgICAgeE91dC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgeE91dElEID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zbGljZSg1KVxuICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tzRnJvbVN0b3JhZ2Uuc3BsaWNlKHhPdXRJRCwgMSlcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZVRhc2tzRnJvbVN0b3JhZ2UpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIFtjcmVhdGVUYXNrc0Zyb21TdG9yYWdlLCBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlXVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==