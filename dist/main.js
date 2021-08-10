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
            (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createProjectsFromStorageDOM)(createProjectsFromStorage)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvb2JqY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxt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ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbmxldCBsb2NhbExpc3QgPSBbXVxubGV0IHByb2plY3RWYWx1ZSA9IG51bGxcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0gKCl7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKSA9PSBudWxsKXtcbiAgICAgICAgLy8gY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKVxuICAgICAgICAvLyBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpibG9jaztcIilcbiAgICAgICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGZvcm1Db250YWluZXIuaWQgPSBcImZvcm1Db250YWluZXJcIlxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpXG4gICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICAvL2Zvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ6LWluZGV4OjJcIilcbiAgICBpZiAobG9jYWxMaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidG9wOjA7XCIpXG4gICAgfVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHRpdGxlLnR5cGUgPSBcInRleHRcIlxuICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiXG4gICAgdGl0bGUuaWQgPSBcInRpdGxlXCJcbiAgICAvL3RpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCJcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIlxuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbikgXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZHVlLnR5cGUgPSBcImRhdGVcIlxuICAgIGR1ZS5pZCA9IFwiZHVlXCJcbiAgICAvL2R1ZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZSlcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHByaW9yaXR5LnR5cGUgPSBcIm51bWJlclwiXG4gICAgcHJpb3JpdHkucGxhY2Vob2xkZXIgPSBcIlByaW9yaXR5XCJcbiAgICBwcmlvcml0eS5pZCA9IFwicHJpb3JpdHlcIlxuICAgIC8vcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgcHJvamVjdC50eXBlID0gXCJ0ZXh0XCJcbiAgICBpZiAocHJvamVjdFZhbHVlKXtcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9IHByb2plY3RWYWx1ZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCJcbiAgICB9XG4gICAgcHJvamVjdC5pZCA9IFwicHJvamVjdFwiXG4gICAgLy9wcm9qZWN0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCJcbiAgICBzdWJtaXQudmFsdWUgPSBcInN1Ym1pdFwiXG4gICAgc3VibWl0LmlkID0gXCJzdWJtaXRcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuICAgIFxuXG5cbn1cbmZ1bmN0aW9uIGRlbGV0ZUZvcm0oKXtcbiAgICAvLyBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpXG4gICAgLy8gZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZTtcIilcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgbGV0IGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkOyBcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgZm9ybUNvbnRhaW5lci5yZW1vdmVDaGlsZChlKVxufVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKXtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybUNvbnRhaW5lclwiKSA9PSBudWxsKXtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGl2LmlkID0gXCJwcm9qZWN0Rm9ybUNvbnRhaW5lclwiXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cbiAgICBsZXQgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtQ29udGFpbmVyXCIpXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHByb2plY3QudHlwZSA9IFwidGV4dFwiXG4gICAgcHJvamVjdC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCJcbiAgICBwcm9qZWN0LmlkID0gXCJwcm9qZWN0U3VibWlzc2lvbk5hbWVcIlxuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiXG4gICAgc3VibWl0LnZhbHVlID0gXCJzdWJtaXRcIlxuICAgIHN1Ym1pdC5pZCA9IFwic3VibWl0UHJvamVjdEZvcm1cIlxuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICAvLyBtYWtlIGZvcm0sIGRlbGV0ZSBmb3JtIG9uIHN1Ym1pdC5cbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGb3JtKCl7XG4gICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtQ29udGFpbmVyXCIpXG4gICAgbGV0IGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkOyBcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRvZG9MaXN0KXtcbiAgICBsb2NhbExpc3QgPSB0b2RvTGlzdFxuICAgIGRlbGV0ZVRhc2tzKClcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmlkID0gXCJ0YXNrQ29udGFpbmVyXCJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8dG9kb0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG9UYXNrXCIpXG4gICAgICAgIGRpdi5pZCA9IFwidGFza1wiICsgaTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgbGV0IGl0ZW0gPSB0b2RvTGlzdFtpXVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbExpc3QpXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlc1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGRlcy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb25zXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXMpXG4gICAgICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZXNcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGR1ZSlcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdGllc1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG5cblxuICAgICAgICBjb25zdCB4T3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICB4T3V0LnRleHRDb250ZW50ID0gXCJ4XCJcbiAgICAgICAgeE91dC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IGJvcmRlcjpub25lO1wiKVxuICAgICAgICB4T3V0LmlkID0gXCJjbG9zZVwiICArIGlcbiAgICAgICAgeE91dC5jbGFzc0xpc3QuYWRkKFwieE91dFwiKVxuICAgICAgICB4T3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IHhPdXRJRCA9IHhPdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikuc2xpY2UoNSlcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tcIiArIHhPdXRJRClcbiAgICAgICAgICAgIGRpdi5yZW1vdmUoKVxuICAgICAgICAgICAgbG9jYWxMaXN0LnNwbGljZSh4T3V0SUQsIDEpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSlcbiAgICAgICAgfSlcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHhPdXQpXG4gICAgfVxuXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXCIrIHRvZG9MaXN0Lmxlbmd0aCtcIiwgMTAwcHgpOyBkaXNwbGF5OmdyaWQ7XCIpXG59XG5mdW5jdGlvbiBjcmVhdGVTcGVjaWZpY1Rhc2sobmFtZSl7XG4gICAgZGVsZXRlVGFza3MoKVxuICAgIGxldCBjb3VudGVyID0gMFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuaWQgPSBcInRhc2tDb250YWluZXJcIlxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDxsb2NhbExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAobG9jYWxMaXN0W2ldLnByb2plY3RzID09IG5hbWUpe1xuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG9UYXNrXCIpXG4gICAgICAgICAgICBkaXYuaWQgPSBcInRhc2tcIiArIGlcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGxvY2FsTGlzdFtpXVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlc1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgY29uc3QgZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgIGRlcy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb25zXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzKVxuICAgICAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZXNcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkdWUpXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdGllc1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuXG4gICAgICAgICAgICBjb25zdCB4T3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgeE91dC50ZXh0Q29udGVudCA9IFwieFwiXG4gICAgICAgICAgICB4T3V0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgYm9yZGVyOm5vbmU7XCIpXG4gICAgICAgICAgICB4T3V0LmlkID0gXCJjbG9zZVwiICArIGlcbiAgICAgICAgICAgIHhPdXQuY2xhc3NMaXN0LmFkZChcInhPdXRcIilcbiAgICAgICAgICAgIHhPdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHhPdXRJRCA9IHhPdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikuc2xpY2UoNSlcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIgKyB4T3V0SUQpXG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgbG9jYWxMaXN0LnNwbGljZSh4T3V0SUQsIDEpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeShsb2NhbExpc3QpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh4T3V0KVxuICAgICAgICB9XG4gICAgfVxuICAgIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFwiKyBjb3VudGVyK1wiLCAxMDBweCk7IGRpc3BsYXk6Z3JpZDtcIilcblxufVxuZnVuY3Rpb24gZGVsZXRlVGFza3MoKXtcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0NvbnRhaW5lclwiKVxuICAgIGlmIChlID09IG51bGwpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm51bGwsIGV4aXRlZFwiKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkXG4gICAgd2hpbGUoY2hpbGQpe1xuICAgICAgICBlLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICBjaGlsZCA9IGUubGFzdEVsZW1lbnRDaGlsZFxuICAgIH1cbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGUpXG59XG5mdW5jdGlvbiBjcmVhdGVTY3JlZW4oKXtcbiAgICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpncmlkO1wiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmlkID0gXCJwcm9qZWN0c1wiXG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6Z3JpZDtcIilcbiAgICBjb25zdCBwYXJ0aWNsZXNqcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFydGljbGVzLWpzXCIpXG4gICAgcGFydGljbGVzanMuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmVcIik7XG4gICAgY29uc3QgY29udGludWVUb0FwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGludWVUb0FwcENvbnRhaW5lclwiKVxuICAgIGNvbnRpbnVlVG9BcHBDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmU7XCIpXG5cbiAgICBcblxuICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIitcIlxuICAgIGFkZFByb2plY3QuaWQgPSBcImFkZFByb2plY3RcIlxuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJtYXJnaW4tbGVmdDoyMHB4XCIpXG4gICAgXG4gICAgZGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RCdXR0b25zLmlkID0gXCJwcm9qZWN0QnV0dG9uc1wiXG4gICAgZGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKVxuXG4gICAgbGV0IHByb2pMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIHByb2pMYWJlbC5pZCA9IFwicHJvamVjdExhYmVsXCJcbiAgICBwcm9qTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCJcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChwcm9qTGFiZWwpXG4gICAgbGV0IGFsbFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFsbFRhc2tzLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIlxuICAgIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoXCJwcm9idXRcIilcbiAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcblxuICAgICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvYnV0XCIpO1xuICAgICAgICBpZiAoeCl7XG4gICAgICAgICAgICB4LmZvckVhY2goZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyUmlnaHQgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFsbFRhc2tzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLXJpZ2h0OiBzb2xpZCAjNjZGQ0YxXCIpXG4gICAgICAgIHByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKGFsbFRhc2tzLnRleHRDb250ZW50KVxuICAgIH0pXG4gICAgYWxsVGFza3Muc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYm9yZGVyOiBub25lOyBib3JkZXItcmlnaHQ6c29saWQgIzY2RkNGMVwiKVxuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGFsbFRhc2tzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cyl7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEJ1dHRvbnNcIilcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9idXRcIilcbiAgICBwcm9qZWN0LmlkID0gXCJwcm9qZWN0XCIgKyBwcm9qZWN0cy5sZW5ndGhcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoLTFdXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IG5vbmU7bWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicyhwcm9qZWN0cy5sZW5ndGggKjYwKyA2MCkgKyBcInB4XCIpXG4gICAgXG4gICAgLy9wcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwibWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicyhwcm9qZWN0cy5sZW5ndGggKjYwKyA2MCkgKyBcInB4XCIpXG4gICAgZGl2LmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgLy9wcm9qZWN0LmJvcmRlciA9IFwic29saWQgIzY2RkNGMVwiXG4gICAgICAgIC8vIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0QnV0dG9uc1wiKVxuICAgICAgICAvLyBsZXQgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7IFxuICAgICAgICAvLyB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgLy8gICAgIGNoaWxkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLXJpZ2h0Om5vbmU7XCIpXG4gICAgICAgIC8vICAgICBjaGlsZCA9IGUubGFzdEVsZW1lbnRDaGlsZDsgXG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2J1dFwiKTtcbiAgICAgICAgeC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyUmlnaHQgPSBcIm5vbmVcIlxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHByb2plY3RJRCA9IHByb2plY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikuc2xpY2UoNylcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1yaWdodDogc29saWQgIzY2RkNGMTsgbWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicygocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0LnRleHRDb250ZW50KSArMSkgKjYwICsgNjApICsgXCJweFwiKVxuICAgICAgICBwcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcihwcm9qZWN0LnRleHRDb250ZW50KVxuICAgIH0pXG4gICAgXG59XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlRE9NIChwcm9qZWN0cyl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RCdXR0b25zXCIpXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9idXRcIilcbiAgICAgICAgcHJvamVjdC5pZCA9IFwicHJvamVjdFwiICsgaVxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdHNbaV1cbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IG5vbmU7bWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicygoaSsxKSAqNjArIDYwKSArIFwicHhcIilcbiAgICAgICAgXG4gICAgICAgIC8vcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm1hcmdpbi10b3A6IFwiICsgTWF0aC5hYnMocHJvamVjdHMubGVuZ3RoICo2MCsgNjApICsgXCJweFwiKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vcHJvamVjdC5ib3JkZXIgPSBcInNvbGlkICM2NkZDRjFcIlxuICAgICAgICAgICAgLy8gbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RCdXR0b25zXCIpXG4gICAgICAgICAgICAvLyBsZXQgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7IFxuICAgICAgICAgICAgLy8gd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICAvLyAgICAgY2hpbGQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItcmlnaHQ6bm9uZTtcIilcbiAgICAgICAgICAgIC8vICAgICBjaGlsZCA9IGUubGFzdEVsZW1lbnRDaGlsZDsgXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvYnV0XCIpO1xuICAgICAgICAgICAgeC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCJub25lXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1yaWdodDogc29saWQgIzY2RkNGMTsgbWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicygoaSsxKSAqNjAgKyA2MCkgKyBcInB4XCIpXG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcihwcm9qZWN0LnRleHRDb250ZW50KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59XG4vL2FkZCB0byBuZXcgbW9kdWxlIGZvciBldmVudCBsaXN0ZW5lcnMgZXZlbnR1YWxseVxuXG5mdW5jdGlvbiBwcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcihuYW1lKXtcbiAgICBpZiAobmFtZSA9PSBcIkFsbCBUYXNrc1wiKXtcbiAgICAgICAgY3JlYXRlVGFzayhsb2NhbExpc3QpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0VmFsdWUgPSBuYW1lXG4gICAgICAgIGNyZWF0ZVNwZWNpZmljVGFzayhuYW1lKVxuICAgIH1cbn1cbmZ1bmN0aW9uIGhvbWVQYWdlICgpe1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuaWQgPSBcImNvbnRpbnVlVG9BcHBDb250YWluZXJcIlxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGxldCBpbnRyb1RvQXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgaW50cm9Ub0FwcC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byB0aGlzIHRvZG8gbGlzdCBhcHAuIExldCdzIGdldCBvcmdhbml6ZWQhXCJcbiAgICBpbnRyb1RvQXBwLmlkID0gXCJpbnRyb1RvQXBwXCJcbiAgICBpbnRyb1RvQXBwLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgZGl2LmFwcGVuZENoaWxkKGludHJvVG9BcHApXG4gICAgbGV0IGNvbnRpbnVlVG9BcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29udGludWVUb0FwcC5pZCA9IFwiY29udGludWVcIlxuICAgIGNvbnRpbnVlVG9BcHAudGV4dENvbnRlbnQgPSBcIkNvbnRpbnVlIHRvIEFwcFwiXG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRpbnVlVG9BcHApXG59XG5leHBvcnQge2NyZWF0ZUZvcm0gYXMgZGVmYXVsdCwgY3JlYXRlVGFzaywgZGVsZXRlRm9ybSwgY3JlYXRlU2NyZWVuLCBjcmVhdGVQcm9qZWN0cywgY3JlYXRlUHJvamVjdEZvcm0sIGRlbGV0ZVByb2plY3RGb3JtLCBob21lUGFnZSwgY3JlYXRlUHJvamVjdHNGcm9tU3RvcmFnZURPTX0iLCJjb25zdCB0b2RvaXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PntcbiAgICBsZXQgdGl0bGVzID0gdGl0bGVcbiAgICBsZXQgZGVzY3JpcHRpb25zID0gZGVzY3JpcHRpb25cbiAgICBsZXQgZHVlRGF0ZXMgPSBkdWVEYXRlXG4gICAgbGV0IHByaW9yaXRpZXMgPSBwcmlvcml0eVxuICAgIGxldCBwcm9qZWN0cyA9IHByb2plY3RcbiAgICByZXR1cm4ge3RpdGxlcywgZGVzY3JpcHRpb25zLCBkdWVEYXRlcywgcHJpb3JpdGllcywgcHJvamVjdHN9XG59O1xuZXhwb3J0IHt0b2RvaXRlbSBhcyBkZWZhdWx0fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUZvcm0sIHtjcmVhdGVUYXNrLCBkZWxldGVGb3JtLCBjcmVhdGVTY3JlZW4sIGNyZWF0ZVByb2plY3RzLCBjcmVhdGVQcm9qZWN0Rm9ybSwgZGVsZXRlUHJvamVjdEZvcm0sIGhvbWVQYWdlLCBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlRE9NfSBmcm9tIFwiLi9ET00uanNcIlxuaW1wb3J0IHRvZG9pdGVtIGZyb20gXCIuL29iamNyZWF0ZS5qc1wiXG5ob21lUGFnZSgpXG5jb25zdCBjb250aW51ZVRvQXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250aW51ZVwiKVxuY29udGludWVUb0FwcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICBjb250aW51ZVRvQXBwLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lO1wiKVxuICAgIGNyZWF0ZVNjcmVlbigpXG4gICAgbGV0IGFyciA9IGNyZWF0ZVNjcmVlbkZyb21Mb2NhbFN0b3JhZ2UoKVxuICAgIGxldCB0b2RvTGlzdCA9IFtdXG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBpZiAoYXJyWzBdICE9IG51bGwpIHtcbiAgICAgICAgdG9kb0xpc3QgPSBhcnJbMF1cbiAgICB9XG4gICAgaWYgKGFyclsxXSAhPSBudWxsKSB7XG4gICAgICAgIHByb2plY3RzID0gYXJyWzFdXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFkZHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHRhc2tcIilcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpXG4gICAgbGV0IHRpdGxlVmFsdWVcbiAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZVxuICAgIGxldCBkdWVWYWx1ZVxuICAgIGxldCBwcmlvcml0eVZhbHVlXG4gICAgbGV0IHByb2plY3RWYWx1ZVxuICAgIFxuICAgIGxldCBudW1Gb3JtcyA9IDBcbiAgICBhZGR0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgYWRkdGFzay5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAyMDBweFwiKVxuICAgICAgICBhZGR0YXNrLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiXG4gICAgfSlcbiAgICBhZGR0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpe1xuICAgICAgICBhZGR0YXNrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDgwcHhcIilcbiAgICAgICAgYWRkdGFzay50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgfSlcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAyMDBweFwiKVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiXG4gICAgICAgIH0sIDUwKVxuICAgIH0pXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiA4MHB4XCIpXG4gICAgICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIitcIlxuICAgIH0pXG4gICAgYWRkdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCEobnVtRm9ybXMpKXtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgzMSwgNDAsIDUxLCAwLjUpXCJcbiAgICAgICAgICAgIHByb2plY3RzZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxOTcsIDE5OCwgMTk5LCAwLjUpXCJcbiAgICAgICAgICAgIC8vIHByb2plY3RzZGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eTo3MCU7ei1pbmRleDoxXCIpXG4gICAgICAgICAgICAvL2NyZWF0ZSBmb3JtXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpXG4gICAgICAgICAgICBjcmVhdGVGb3JtKClcbiAgICAgICAgICAgIG51bUZvcm1zICsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKVxuICAgICAgICAgICAgLy9mYWN0b3J5IGZ1bmN0aW9uIHdpdGggZm9ybSBwYXJhbWV0ZXJzXG4gICAgICAgICAgICBzdWJtaXNzaW9uKClcbiAgICAgICAgICAgIC8vTWFrZSB0b2RvIGl0ZW0gdmlzaWJsZVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfSlcbiAgICBcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoIShudW1Gb3Jtcykpe1xuICAgICAgICAgICAgbnVtRm9ybXMrK1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEZvcm0oKVxuICAgICAgICAgICAgcHJvamVjdFN1Ym1pc3Npb24oKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2NyZWF0ZXByb2plY3Rmb3JtXG4gICAgICAgIH0pXG4gICAgZnVuY3Rpb24gc3VibWlzc2lvbigpe1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIilcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpXG4gICAgICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlXCIpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0XCIpXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICAgICAgICAgIHRpdGxlVmFsdWUgPSB0aXRsZS52YWx1ZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZSA9IGRlc2NyaXB0aW9uLnZhbHVlXG4gICAgICAgICAgICBkdWVWYWx1ZSA9IGR1ZS52YWx1ZVxuICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5LnZhbHVlXG4gICAgICAgICAgICBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0LnZhbHVlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWUpXG4gICAgICAgICAgICBpZiAocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VmFsdWUpID09IC0xKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RWYWx1ZSlcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZUZvcm0oKVxuICAgICAgICAgICAgdG9kb0xpc3QucHVzaCh0b2RvaXRlbSh0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBkdWVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgcHJvamVjdFZhbHVlKSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKVxuICAgICAgICAgICAgY3JlYXRlVGFzayh0b2RvTGlzdClcbiAgICAgICAgICAgIG51bUZvcm1zLS1cbiAgICAgICAgICAgIGNvbnN0IHhPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnhPdXRcIilcbiAgICAgICAgICAgIHhPdXQuZm9yRWFjaChmdW5jdGlvbihlbGVtKXtcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgeE91dElEID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zbGljZSg1KVxuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5zcGxpY2UoeE91dElELCAxKVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvcGFjaXR5OjEwMCU7ei1pbmRleDoxXCIpXG4gICAgICAgICAgICAvLyBwcm9qZWN0c2Rpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm9wYWNpdHk6MTAwJTsgei1pbmRleDoxO1wiKVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvamVjdFN1Ym1pc3Npb24oKXtcbiAgICAgICAgY29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0UHJvamVjdEZvcm1cIilcbiAgICAgICAgY29uc3QgcHJvamVjdFN1Ym1pc3Npb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U3VibWlzc2lvbk5hbWVcIilcbiAgICAgICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdFN1Ym1pc3Npb25OYW1lLnZhbHVlKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cylcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RGb3JtKClcbiAgICAgICAgICAgIG51bUZvcm1zLS1cbiAgICAgICAgfSlcbiAgICB9XG59KVxuZnVuY3Rpb24gY3JlYXRlU2NyZWVuRnJvbUxvY2FsU3RvcmFnZSgpe1xuICAgIGxldCBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBpZiAoY3JlYXRlUHJvamVjdHNGcm9tU3RvcmFnZSAhPSBudWxsKXtcbiAgICAgICAgbGV0IHByb2pMZW5ndGggPSBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlLmxlbmd0aFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2pMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlRE9NKGNyZWF0ZVByb2plY3RzRnJvbVN0b3JhZ2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNyZWF0ZVRhc2tzRnJvbVN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGlmIChjcmVhdGVUYXNrc0Zyb21TdG9yYWdlICE9IG51bGwpe1xuICAgICAgICBjcmVhdGVUYXNrKGNyZWF0ZVRhc2tzRnJvbVN0b3JhZ2UpXG4gICAgICAgIGNvbnN0IHhPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnhPdXRcIilcbiAgICAgICAgeE91dC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgeE91dElEID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zbGljZSg1KVxuICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tzRnJvbVN0b3JhZ2Uuc3BsaWNlKHhPdXRJRCwgMSlcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZVRhc2tzRnJvbVN0b3JhZ2UpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIFtjcmVhdGVUYXNrc0Zyb21TdG9yYWdlLCBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlXVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==