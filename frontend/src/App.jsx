import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/Form';
import Item from './components/Item';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [tasks, setTasks] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(data => setTasks(data))
  }

  useEffect(() => {
    fetchData();
  }, []);

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
