import { useState } from 'react';

const Form = ({ handleAddTask }) => {

    const [value, setValue] = useState('');

    return (
    <form onSubmit={(event) => event.preventDefault()}>
        <input type='text' id='task-id' name='task' onChange={event => setValue(event.target.value)} value={value}></input>
        <input 
            type='submit' 
            value='Add Task' 
            onClick={() => {
                handleAddTask(value)
                setValue('')
            }}>
        </input>
    </form>
    );
}

export default Form;