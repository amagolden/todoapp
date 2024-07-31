import { useState } from 'react';
import './App.css';
import TaskForm from './components/Form';
import Item from './components/Item';
import 'bootstrap/dist/css/bootstrap.min.css';

let items = [
  {
    id: 1,
    item: 'go for a walk',
    isDone: false,
    isEdit: false,
  },
  {
    id: 2,
    item: 'order groceries',
    isDone: false,
    isEdit: false,
  },
  {
    id: 3,
    item: 'wash the dishes',
    isDone: false,
    isEdit: false,
  },
  {
    id: 4,
    item: 'cook dinner',
    isDone: false,
    isEdit: false,
  }
]

function App() {

  const [tasks, setTasks] = useState(items);

  const handleAddTask = (value) => {
    setTasks([...tasks, {id: (tasks.length + 1), item: value, isDone: false, isEdit: false }]);
  }

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);

    setTasks(updatedTasks);
  }

  const handleIsDone = (id) => {
    const foundTask = (tasks.find(task => task.id === id));
    foundTask.isDone = !foundTask.isDone;

    const newTasks = tasks.map(task => (task.id === id) ? foundTask : task);
    setTasks(newTasks);
  }

  const handleEditTask = (id) => {
    const foundTask = (tasks.find(task => task.id === id));
    foundTask.isEdit = !foundTask.isEdit;

    const newTasks = tasks.map(task => (task.id === id) ? foundTask : task);
    setTasks(newTasks);
  }

  const handleUpdateTask = (value, id) => {
    const foundTask = (tasks.find(task => task.id === id));
    foundTask.item = value;

    const newTasks = tasks.map(task => (task.id === id) ? foundTask : task);
    setTasks(newTasks);
    handleEditTask(id);
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
          handleEditTask={handleEditTask}
          isEdit={element.isEdit}
          handleUpdateTask={handleUpdateTask}
        />)}
      <TaskForm handleAddTask={handleAddTask} />
    </div>
  );
}

export default App;
