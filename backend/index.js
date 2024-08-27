const todos = require('./data');
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
    res.json(todos)
  })

app.get('/todos/:id', (req, res) => {
    const parsedToDoId = Number(req.params.id);
    const foundTodo = todos.find((todo) => todo.id === parsedToDoId);

    if(foundTodo) {
        res.send(foundTodo);
    } else {
        res.sendStatus(404);
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})