const todoitem = (title, description, dueDate, priority, project) =>{
    let titles = title
    let descriptions = description
    let dueDates = dueDate
    let priorities = priority
    let projects = project
    return {titles, descriptions, dueDates, priorities, projects}
};
export {todoitem as default}