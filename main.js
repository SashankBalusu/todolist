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
        div.id = "todoTask"
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
            div.id = "todoTask"
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
    allTasks.setAttribute("style", "background: transparent; border: none;")
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
        this.setAttribute("style", "border-right: solid #66FCF1; margin-top: " + Math.abs(projectID *60 + 60) + "px")
        projectButtonEventListener(project.textContent)
    })
    
}
function createProjectsFromStorageDOM (projects){
    for (let i = 0; i < projects.length; i++){
        let div = document.querySelector("#projectButtons")
        let project = document.createElement("button")
        project.classList.add("probut")
        project.id = "project" + projects.length
        project.textContent = projects[i]
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
            this.setAttribute("style", "border-right: solid #66FCF1; margin-top: " + Math.abs(projectID *60 + 60) + "px")
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
    createScreenFromLocalStorage()
    const addtask = document.querySelector("#addtask")
    const addProject = document.querySelector("#addProject")
    let titleValue
    let descriptionValue
    let dueValue
    let priorityValue
    let projectValue
    let todoList = []
    let projects = []
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
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvb2JqY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxt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WSxpREFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBaUI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQWM7QUFDOUI7QUFDQSxZQUFZLG1EQUFVO0FBQ3RCLDBCQUEwQixzREFBUTtBQUNsQztBQUNBLFlBQVksb0RBQVU7QUFDdEI7QUFDQSwyREFBMkQ7QUFDM0QsK0RBQStELFdBQVc7O0FBRTFFLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjO0FBQzFCLFlBQVksMkRBQWlCO0FBQzdCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QyxZQUFZLHFFQUE0QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbmxldCBsb2NhbExpc3QgPSBbXVxubGV0IHByb2plY3RWYWx1ZSA9IG51bGxcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0gKCl7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKSA9PSBudWxsKXtcbiAgICAgICAgLy8gY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKVxuICAgICAgICAvLyBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpibG9jaztcIilcbiAgICAgICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGZvcm1Db250YWluZXIuaWQgPSBcImZvcm1Db250YWluZXJcIlxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpXG4gICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICAvL2Zvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ6LWluZGV4OjJcIilcbiAgICBpZiAobG9jYWxMaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidG9wOjA7XCIpXG4gICAgfVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHRpdGxlLnR5cGUgPSBcInRleHRcIlxuICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiXG4gICAgdGl0bGUuaWQgPSBcInRpdGxlXCJcbiAgICAvL3RpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCJcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIlxuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbikgXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZHVlLnR5cGUgPSBcImRhdGVcIlxuICAgIGR1ZS5pZCA9IFwiZHVlXCJcbiAgICAvL2R1ZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZSlcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHByaW9yaXR5LnR5cGUgPSBcIm51bWJlclwiXG4gICAgcHJpb3JpdHkucGxhY2Vob2xkZXIgPSBcIlByaW9yaXR5XCJcbiAgICBwcmlvcml0eS5pZCA9IFwicHJpb3JpdHlcIlxuICAgIC8vcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgcHJvamVjdC50eXBlID0gXCJ0ZXh0XCJcbiAgICBpZiAocHJvamVjdFZhbHVlKXtcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9IHByb2plY3RWYWx1ZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCJcbiAgICB9XG4gICAgcHJvamVjdC5pZCA9IFwicHJvamVjdFwiXG4gICAgLy9wcm9qZWN0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCJcbiAgICBzdWJtaXQudmFsdWUgPSBcInN1Ym1pdFwiXG4gICAgc3VibWl0LmlkID0gXCJzdWJtaXRcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuICAgIFxuXG5cbn1cbmZ1bmN0aW9uIGRlbGV0ZUZvcm0oKXtcbiAgICAvLyBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpXG4gICAgLy8gZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZTtcIilcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgbGV0IGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkOyBcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgZm9ybUNvbnRhaW5lci5yZW1vdmVDaGlsZChlKVxufVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKXtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybUNvbnRhaW5lclwiKSA9PSBudWxsKXtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGl2LmlkID0gXCJwcm9qZWN0Rm9ybUNvbnRhaW5lclwiXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cbiAgICBsZXQgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtQ29udGFpbmVyXCIpXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHByb2plY3QudHlwZSA9IFwidGV4dFwiXG4gICAgcHJvamVjdC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCJcbiAgICBwcm9qZWN0LmlkID0gXCJwcm9qZWN0U3VibWlzc2lvbk5hbWVcIlxuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiXG4gICAgc3VibWl0LnZhbHVlID0gXCJzdWJtaXRcIlxuICAgIHN1Ym1pdC5pZCA9IFwic3VibWl0UHJvamVjdEZvcm1cIlxuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICAvLyBtYWtlIGZvcm0sIGRlbGV0ZSBmb3JtIG9uIHN1Ym1pdC5cbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGb3JtKCl7XG4gICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtQ29udGFpbmVyXCIpXG4gICAgbGV0IGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkOyBcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRvZG9MaXN0KXtcbiAgICBsb2NhbExpc3QgPSB0b2RvTGlzdFxuICAgIGRlbGV0ZVRhc2tzKClcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmlkID0gXCJ0YXNrQ29udGFpbmVyXCJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8dG9kb0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXYuaWQgPSBcInRvZG9UYXNrXCJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgbGV0IGl0ZW0gPSB0b2RvTGlzdFtpXVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbExpc3QpXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlc1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGRlcy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb25zXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXMpXG4gICAgICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZXNcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGR1ZSlcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdGllc1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG4gICAgfVxuXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXCIrIHRvZG9MaXN0Lmxlbmd0aCtcIiwgMTAwcHgpOyBkaXNwbGF5OmdyaWQ7XCIpXG59XG5mdW5jdGlvbiBjcmVhdGVTcGVjaWZpY1Rhc2sobmFtZSl7XG4gICAgZGVsZXRlVGFza3MoKVxuICAgIGxldCBjb3VudGVyID0gMFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuaWQgPSBcInRhc2tDb250YWluZXJcIlxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDxsb2NhbExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAobG9jYWxMaXN0W2ldLnByb2plY3RzID09IG5hbWUpe1xuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBkaXYuaWQgPSBcInRvZG9UYXNrXCJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGxvY2FsTGlzdFtpXVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlc1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgY29uc3QgZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgIGRlcy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb25zXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzKVxuICAgICAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZXNcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkdWUpXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdGllc1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgICAgICB9XG4gICAgfVxuICAgIGJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFwiKyBjb3VudGVyK1wiLCAxMDBweCk7IGRpc3BsYXk6Z3JpZDtcIilcblxufVxuZnVuY3Rpb24gZGVsZXRlVGFza3MoKXtcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0NvbnRhaW5lclwiKVxuICAgIGlmIChlID09IG51bGwpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm51bGwsIGV4aXRlZFwiKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGNoaWxkID0gZS5sYXN0RWxlbWVudENoaWxkXG4gICAgd2hpbGUoY2hpbGQpe1xuICAgICAgICBlLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICBjaGlsZCA9IGUubGFzdEVsZW1lbnRDaGlsZFxuICAgIH1cbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGUpXG59XG5mdW5jdGlvbiBjcmVhdGVTY3JlZW4oKXtcbiAgICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpncmlkO1wiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmlkID0gXCJwcm9qZWN0c1wiXG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6Z3JpZDtcIilcbiAgICBjb25zdCBwYXJ0aWNsZXNqcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFydGljbGVzLWpzXCIpXG4gICAgcGFydGljbGVzanMuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmVcIik7XG4gICAgY29uc3QgY29udGludWVUb0FwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGludWVUb0FwcENvbnRhaW5lclwiKVxuICAgIGNvbnRpbnVlVG9BcHBDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmU7XCIpXG5cbiAgICBcblxuICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIitcIlxuICAgIGFkZFByb2plY3QuaWQgPSBcImFkZFByb2plY3RcIlxuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJtYXJnaW4tbGVmdDoyMHB4XCIpXG4gICAgXG4gICAgZGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RCdXR0b25zLmlkID0gXCJwcm9qZWN0QnV0dG9uc1wiXG4gICAgZGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKVxuXG4gICAgbGV0IHByb2pMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIHByb2pMYWJlbC5pZCA9IFwicHJvamVjdExhYmVsXCJcbiAgICBwcm9qTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCJcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChwcm9qTGFiZWwpXG4gICAgbGV0IGFsbFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFsbFRhc2tzLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIlxuICAgIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoXCJwcm9idXRcIilcbiAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcblxuICAgICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvYnV0XCIpO1xuICAgICAgICBpZiAoeCl7XG4gICAgICAgICAgICB4LmZvckVhY2goZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyUmlnaHQgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFsbFRhc2tzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLXJpZ2h0OiBzb2xpZCAjNjZGQ0YxXCIpXG4gICAgICAgIHByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKGFsbFRhc2tzLnRleHRDb250ZW50KVxuICAgIH0pXG4gICAgYWxsVGFza3Muc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYm9yZGVyOiBub25lO1wiKVxuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGFsbFRhc2tzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cyl7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEJ1dHRvbnNcIilcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9idXRcIilcbiAgICBwcm9qZWN0LmlkID0gXCJwcm9qZWN0XCIgKyBwcm9qZWN0cy5sZW5ndGhcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoLTFdXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IG5vbmU7bWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicyhwcm9qZWN0cy5sZW5ndGggKjYwKyA2MCkgKyBcInB4XCIpXG4gICAgXG4gICAgLy9wcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwibWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicyhwcm9qZWN0cy5sZW5ndGggKjYwKyA2MCkgKyBcInB4XCIpXG4gICAgZGl2LmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgLy9wcm9qZWN0LmJvcmRlciA9IFwic29saWQgIzY2RkNGMVwiXG4gICAgICAgIC8vIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0QnV0dG9uc1wiKVxuICAgICAgICAvLyBsZXQgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7IFxuICAgICAgICAvLyB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgLy8gICAgIGNoaWxkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLXJpZ2h0Om5vbmU7XCIpXG4gICAgICAgIC8vICAgICBjaGlsZCA9IGUubGFzdEVsZW1lbnRDaGlsZDsgXG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2J1dFwiKTtcbiAgICAgICAgeC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyUmlnaHQgPSBcIm5vbmVcIlxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHByb2plY3RJRCA9IHByb2plY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikuc2xpY2UoNylcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1yaWdodDogc29saWQgIzY2RkNGMTsgbWFyZ2luLXRvcDogXCIgKyBNYXRoLmFicyhwcm9qZWN0SUQgKjYwICsgNjApICsgXCJweFwiKVxuICAgICAgICBwcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcihwcm9qZWN0LnRleHRDb250ZW50KVxuICAgIH0pXG4gICAgXG59XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlRE9NIChwcm9qZWN0cyl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RCdXR0b25zXCIpXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9idXRcIilcbiAgICAgICAgcHJvamVjdC5pZCA9IFwicHJvamVjdFwiICsgcHJvamVjdHMubGVuZ3RoXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXVxuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGJvcmRlcjogbm9uZTttYXJnaW4tdG9wOiBcIiArIE1hdGguYWJzKHByb2plY3RzLmxlbmd0aCAqNjArIDYwKSArIFwicHhcIilcbiAgICAgICAgXG4gICAgICAgIC8vcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm1hcmdpbi10b3A6IFwiICsgTWF0aC5hYnMocHJvamVjdHMubGVuZ3RoICo2MCsgNjApICsgXCJweFwiKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vcHJvamVjdC5ib3JkZXIgPSBcInNvbGlkICM2NkZDRjFcIlxuICAgICAgICAgICAgLy8gbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RCdXR0b25zXCIpXG4gICAgICAgICAgICAvLyBsZXQgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7IFxuICAgICAgICAgICAgLy8gd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICAvLyAgICAgY2hpbGQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItcmlnaHQ6bm9uZTtcIilcbiAgICAgICAgICAgIC8vICAgICBjaGlsZCA9IGUubGFzdEVsZW1lbnRDaGlsZDsgXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvYnV0XCIpO1xuICAgICAgICAgICAgeC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCJub25lXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHByb2plY3RJRCA9IHByb2plY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikuc2xpY2UoNylcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItcmlnaHQ6IHNvbGlkICM2NkZDRjE7IG1hcmdpbi10b3A6IFwiICsgTWF0aC5hYnMocHJvamVjdElEICo2MCArIDYwKSArIFwicHhcIilcbiAgICAgICAgICAgIHByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKHByb2plY3QudGV4dENvbnRlbnQpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cbi8vYWRkIHRvIG5ldyBtb2R1bGUgZm9yIGV2ZW50IGxpc3RlbmVycyBldmVudHVhbGx5XG5cbmZ1bmN0aW9uIHByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKG5hbWUpe1xuICAgIGlmIChuYW1lID09IFwiQWxsIFRhc2tzXCIpe1xuICAgICAgICBjcmVhdGVUYXNrKGxvY2FsTGlzdClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByb2plY3RWYWx1ZSA9IG5hbWVcbiAgICAgICAgY3JlYXRlU3BlY2lmaWNUYXNrKG5hbWUpXG4gICAgfVxufVxuZnVuY3Rpb24gaG9tZVBhZ2UgKCl7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5pZCA9IFwiY29udGludWVUb0FwcENvbnRhaW5lclwiXG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgbGV0IGludHJvVG9BcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBpbnRyb1RvQXBwLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIHRoaXMgdG9kbyBsaXN0IGFwcC4gTGV0J3MgZ2V0IG9yZ2FuaXplZCFcIlxuICAgIGludHJvVG9BcHAuaWQgPSBcImludHJvVG9BcHBcIlxuICAgIGludHJvVG9BcHAuc3R5bGUuY29sb3IgPSBcIndoaXRlXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW50cm9Ub0FwcClcbiAgICBsZXQgY29udGludWVUb0FwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb250aW51ZVRvQXBwLmlkID0gXCJjb250aW51ZVwiXG4gICAgY29udGludWVUb0FwcC50ZXh0Q29udGVudCA9IFwiQ29udGludWUgdG8gQXBwXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGludWVUb0FwcClcbn1cbmV4cG9ydCB7Y3JlYXRlRm9ybSBhcyBkZWZhdWx0LCBjcmVhdGVUYXNrLCBkZWxldGVGb3JtLCBjcmVhdGVTY3JlZW4sIGNyZWF0ZVByb2plY3RzLCBjcmVhdGVQcm9qZWN0Rm9ybSwgZGVsZXRlUHJvamVjdEZvcm0sIGhvbWVQYWdlLCBjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlRE9NfSIsImNvbnN0IHRvZG9pdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+e1xuICAgIGxldCB0aXRsZXMgPSB0aXRsZVxuICAgIGxldCBkZXNjcmlwdGlvbnMgPSBkZXNjcmlwdGlvblxuICAgIGxldCBkdWVEYXRlcyA9IGR1ZURhdGVcbiAgICBsZXQgcHJpb3JpdGllcyA9IHByaW9yaXR5XG4gICAgbGV0IHByb2plY3RzID0gcHJvamVjdFxuICAgIHJldHVybiB7dGl0bGVzLCBkZXNjcmlwdGlvbnMsIGR1ZURhdGVzLCBwcmlvcml0aWVzLCBwcm9qZWN0c31cbn07XG5leHBvcnQge3RvZG9pdGVtIGFzIGRlZmF1bHR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlRm9ybSwge2NyZWF0ZVRhc2ssIGRlbGV0ZUZvcm0sIGNyZWF0ZVNjcmVlbiwgY3JlYXRlUHJvamVjdHMsIGNyZWF0ZVByb2plY3RGb3JtLCBkZWxldGVQcm9qZWN0Rm9ybSwgaG9tZVBhZ2UsIGNyZWF0ZVByb2plY3RzRnJvbVN0b3JhZ2VET019IGZyb20gXCIuL0RPTS5qc1wiXG5pbXBvcnQgdG9kb2l0ZW0gZnJvbSBcIi4vb2JqY3JlYXRlLmpzXCJcbmhvbWVQYWdlKClcbmNvbnN0IGNvbnRpbnVlVG9BcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRpbnVlXCIpXG5jb250aW51ZVRvQXBwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGNvbnRpbnVlVG9BcHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmU7XCIpXG4gICAgY3JlYXRlU2NyZWVuKClcbiAgICBjcmVhdGVTY3JlZW5Gcm9tTG9jYWxTdG9yYWdlKClcbiAgICBjb25zdCBhZGR0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGR0YXNrXCIpXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKVxuICAgIGxldCB0aXRsZVZhbHVlXG4gICAgbGV0IGRlc2NyaXB0aW9uVmFsdWVcbiAgICBsZXQgZHVlVmFsdWVcbiAgICBsZXQgcHJpb3JpdHlWYWx1ZVxuICAgIGxldCBwcm9qZWN0VmFsdWVcbiAgICBsZXQgdG9kb0xpc3QgPSBbXVxuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgbGV0IG51bUZvcm1zID0gMFxuICAgIGFkZHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpe1xuICAgICAgICBhZGR0YXNrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDIwMHB4XCIpXG4gICAgICAgIGFkZHRhc2sudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCJcbiAgICB9KVxuICAgIGFkZHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGFkZHRhc2suc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogODBweFwiKVxuICAgICAgICBhZGR0YXNrLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICB9KVxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpe1xuICAgICAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDIwMHB4XCIpXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCJcbiAgICAgICAgfSwgNTApXG4gICAgfSlcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpe1xuICAgICAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDgwcHhcIilcbiAgICAgICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgfSlcbiAgICBhZGR0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoIShudW1Gb3Jtcykpe1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIilcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDMxLCA0MCwgNTEsIDAuNSlcIlxuICAgICAgICAgICAgcHJvamVjdHNkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDE5NywgMTk4LCAxOTksIDAuNSlcIlxuICAgICAgICAgICAgLy8gcHJvamVjdHNkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvcGFjaXR5OjcwJTt6LWluZGV4OjFcIilcbiAgICAgICAgICAgIC8vY3JlYXRlIGZvcm1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICAgICAgICAgIGNyZWF0ZUZvcm0oKVxuICAgICAgICAgICAgbnVtRm9ybXMgKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpXG4gICAgICAgICAgICAvL2ZhY3RvcnkgZnVuY3Rpb24gd2l0aCBmb3JtIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIHN1Ym1pc3Npb24oKVxuICAgICAgICAgICAgLy9NYWtlIHRvZG8gaXRlbSB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9KVxuXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCEobnVtRm9ybXMpKXtcbiAgICAgICAgICAgIG51bUZvcm1zKytcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RGb3JtKClcbiAgICAgICAgICAgIHByb2plY3RTdWJtaXNzaW9uKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9jcmVhdGVwcm9qZWN0Zm9ybVxuICAgICAgICB9KVxuICAgIGZ1bmN0aW9uIHN1Ym1pc3Npb24oKXtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIilcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKVxuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZVwiKVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIilcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFwiKVxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpXG4gICAgICAgICAgICB0aXRsZVZhbHVlID0gdGl0bGUudmFsdWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFsdWUgPSBkZXNjcmlwdGlvbi52YWx1ZVxuICAgICAgICAgICAgZHVlVmFsdWUgPSBkdWUudmFsdWVcbiAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eS52YWx1ZVxuICAgICAgICAgICAgcHJvamVjdFZhbHVlID0gcHJvamVjdC52YWx1ZVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlKVxuICAgICAgICAgICAgaWYgKHByb2plY3RzLmluZGV4T2YocHJvamVjdFZhbHVlKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0VmFsdWUpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdHMocHJvamVjdHMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGVGb3JtKClcbiAgICAgICAgICAgIHRvZG9MaXN0LnB1c2godG9kb2l0ZW0odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZHVlVmFsdWUsIHByaW9yaXR5VmFsdWUsIHByb2plY3RWYWx1ZSkpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSlcbiAgICAgICAgICAgIGNyZWF0ZVRhc2sodG9kb0xpc3QpXG4gICAgICAgICAgICBudW1Gb3Jtcy0tXG4gICAgICAgICAgICAvLyBjb250ZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eToxMDAlO3otaW5kZXg6MVwiKVxuICAgICAgICAgICAgLy8gcHJvamVjdHNkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvcGFjaXR5OjEwMCU7IHotaW5kZXg6MTtcIilcblxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb2plY3RTdWJtaXNzaW9uKCl7XG4gICAgICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFByb2plY3RGb3JtXCIpXG4gICAgICAgIGNvbnN0IHByb2plY3RTdWJtaXNzaW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFN1Ym1pc3Npb25OYW1lXCIpXG4gICAgICAgIHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RTdWJtaXNzaW9uTmFtZS52YWx1ZSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdHMocHJvamVjdHMpXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0Rm9ybSgpXG4gICAgICAgICAgICBudW1Gb3Jtcy0tXG4gICAgICAgIH0pXG4gICAgfVxufSlcbmZ1bmN0aW9uIGNyZWF0ZVNjcmVlbkZyb21Mb2NhbFN0b3JhZ2UoKXtcbiAgICBsZXQgY3JlYXRlUHJvamVjdHNGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgaWYgKGNyZWF0ZVByb2plY3RzRnJvbVN0b3JhZ2UgIT0gbnVsbCl7XG4gICAgICAgIGxldCBwcm9qTGVuZ3RoID0gY3JlYXRlUHJvamVjdHNGcm9tU3RvcmFnZS5sZW5ndGhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdHNGcm9tU3RvcmFnZURPTShjcmVhdGVQcm9qZWN0c0Zyb21TdG9yYWdlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBjcmVhdGVUYXNrc0Zyb21TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBpZiAoY3JlYXRlVGFza3NGcm9tU3RvcmFnZSAhPSBudWxsKXtcbiAgICAgICAgY3JlYXRlVGFzayhjcmVhdGVUYXNrc0Zyb21TdG9yYWdlKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9