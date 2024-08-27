import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TaskForm = ({ handleAddTask }) => {

    const [value, setValue] = useState('');

    return (
    <form onSubmit={(event) => event.preventDefault()}>
        <Form.Group className="mb-3">
            <Form.Control 
                type='text' 
                id='task-id' 
                name='task' 
                onChange={event => setValue(event.target.value)} 
                value={value} 
                placeholder='Enter task' />    
        </Form.Group>
        <button 
            className='form-button btn btn-info'
            type='submit' 
            value='Add Task' 
            onClick={() => {
                handleAddTask(value)
                setValue('')
            }}>Add Task
        </button>
    </form>
    );
}

export default TaskForm;