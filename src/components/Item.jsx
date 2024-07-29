import { BsCheckSquareFill, BsSquare, BsTrash3Fill } from "react-icons/bs";

const Item = ({ task, id, handleDeleteTask, handleIsDone, isDone }) => {
    return (
        <div>
            <button className='emoji' onClick={() => handleIsDone(id)}>{ isDone ? <BsCheckSquareFill /> : <BsSquare />}</button>
            <span className={ isDone ? 'complete' : 'incomplete'}>{task}</span>
            <button className='emoji trash-icon' onClick={() => handleDeleteTask(id)}><BsTrash3Fill /></button>
        </div>
    );
}

export default Item;