import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Item from './components/Item';

let items = [
  {
    id: 1,
    item: 'go for a walk',
    isDone: false
  },
  {
    id: 2,
    item: 'order groceries',
    isDone: true
  },
  {
    id: 3,
    item: 'wash the dishes',
    isDone: true
  },
  {
    id: 4,
    item: 'cook dinner',
    isDone: false
  }
]

function App() {

  const [tasks, setTasks] = useState(items);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Item />
      <Form />
    </div>
  );
}

export default App;
