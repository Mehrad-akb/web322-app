/************************************************************************* 
 *  WEB322– Assignment 2 
 * I declare that this assignment is my own work in accordance with Seneca Academic 
 Policy. No part * of this assignment has been copied manually or electronically from any
 other source 
 *  (including 3rd party web sites) or distributed to other students. 
 * 
 * Name: Mehrad Akbari Student ID: 130077217 Date: 28/09/2022 
 * 
 * Your app’s URL (from Cyclic) :_______________________________________________ 
 * 
 * *************************************************************************/

const express = require('express')

const dataService = require('./data-service')

require('dotenv').config()

const app = express()


const port = process.env.PORT


app.use(express.static('public'))




app.get('/', (req, res) => {
    res.sendFile('./views/home.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})

app.get('/employees', (req, res) => {
    dataService.getAllEmployees()
        .then(data => res.json(data))
        .catch(err => console.log(err))

})
app.get('/managers', (req, res) => {
    dataService.getManagers()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})
app.get('/departments', (req, res) => {
    dataService.getDepartments()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})
app.get('*', function (req, res) {
    res.sendFile('./views/404.html', { root: __dirname })
})
dataService.initialize()
    .then(
        app.listen(port, () => {
            console.log(`Express http server listening on ${port}`)
        })
    )
    .catch(err => console.log(err))