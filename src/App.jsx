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

  const handleAddTask = (value) => {
    setTasks([...tasks, {id: (tasks.length + 1), item: value, isDone: false }]);
  }

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);

    setTasks(updatedTasks);
  }

  const handleIsDone = (id) => {
    const foundTask = (tasks.find(task => task.id === id));
    foundTask.isDone = !foundTask.isDone;
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      {tasks.map(element => 
        <Item 
          key={element.id} 
          task={element.item} 
          id={element.id} 
          handleDeleteTask={handleDeleteTask} 
          handleIsDone={handleIsDone} 
          isDone={element.isDone}
        />)}
      <Form handleAddTask={handleAddTask} />
    </div>
  );
}

export default App;
