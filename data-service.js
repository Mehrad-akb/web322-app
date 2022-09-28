const fs = require('fs')


let employees
let departments

exports.initialize = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/employees.json', (err, data) => {
            if (err) reject("Failure to read file employees.json!");
            employees = JSON.parse(data);
            fs.readFile('./data/departments.json', (err, data) => {
                if (err) reject("Failure to read file departments.json!");
                departments = JSON.parse(data);
                resolve()
            })
        })
    })
}

exports.getAllEmployees = () => {
    return new Promise((resolve, reject) => {
        if (employees.length == 0) reject(Error("no results (employees) returned"))
        resolve(employees)
    })
}

exports.getManagers = () => {
    return new Promise((resolve, reject) => {
        const managers = []
        for (let index = 0; index < employees.length; index++) {
            const element = employees[index];
            if (element.isManager) managers.push(element)
        }
        resolve(managers)
        if (managers.length == 0) reject(Error("no results (managers) returned"))
    })
}

exports.getDepartments = () => {
    return new Promise((resolve, reject) => {
        if (departments.length == 0) reject(Error("no results (departments) returned"))
        resolve(departments)
    })
}