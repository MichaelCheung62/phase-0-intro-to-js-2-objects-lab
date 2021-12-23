// Write your solution in this file!
let employee = {
    name: "Joe",
    streetAddress : "11 Broadway"
}

const updateEmployeeWithKeyAndValue = (employee,key,value) => {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee,key,value) => {
    employee[key] = value
    return employee
}

const deleteFromEmployeeByKey =(employee,key) => {
    const copyEmployee = {...employee}
    delete copyEmployee[key]
    return copyEmployee
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}