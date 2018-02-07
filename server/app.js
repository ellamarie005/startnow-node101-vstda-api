const express = require('express');
const morgan = require('morgan');
const postman = require('postman');
const bodyParser = require('body-parser');

const app = express();

// add your code here
app.use(bodyParser.json());

var items = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

app.get('/', (req, res) => {
    res.status(200).send({ status: "OK" });

});

app.get('/api/TodoItems', (req, res) => {
    res.status(200).send(items);
});

app.get('/api/TodoItems/:number', (req, res) => {
    var theItem = items.find(todo => todo.todoItemId == req.params.number)
    res.json(theItem);
});


app.post('/api/TodoItems', (req, res) => {
    var theItem = items.slice(todo => todo.todoItemId == req.params.number)
    res.status(201).json(theItem[0]);
});

//need to delete the item/array that is in that parameter(:number)
app.delete('/api/TodoItems/:number', (req, res) => {
    var theItem = items.find(todo => todo.todoItemId == req.params.number)
    res.json(theItem);
});

module.exports = app;
