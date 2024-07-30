import { BsCheckSquareFill, BsSquare, BsTrash3Fill } from "react-icons/bs";
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';

const Item = ({ task, id, handleDeleteTask, handleIsDone, isDone, handleEditTask, isEdit, handleUpdateTask }) => {
    
    const [value, setValue] = useState('');
    
    return (
        <div>
            <button className='emoji' onClick={() => handleIsDone(id)}>{ isDone ? <BsCheckSquareFill /> : <BsSquare />}</button>
            <span className={ isDone ? 'complete' : 'incomplete'}>
                { isEdit? 
                        <input 
                            type='text' 
                            id='edit-task' 
                            name='edit-task' 
                            defaultValue={task}
                            onChange={(event) => setValue(event.target.value)}
                             />
                    : task }
            </span>
            <div className='wrapper'>
                <button 
                    className='emoji edit-icon' 
                    onClick={ isEdit ? 
                        () => {
                            handleUpdateTask(value, id)
                            handleEditTask(id)
                        } 
                        : () => handleEditTask(id)
                    }>
                    <MdEdit />
                </button>
                <button 
                    className='emoji trash-icon' 
                    onClick={() => handleDeleteTask(id)}>
                    <BsTrash3Fill />
                </button>
            </div>
        </div>
    );
}

export default Item;