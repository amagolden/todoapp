const Item = ({ task, id, handleDeleteTask, handleIsDone, isDone }) => {
    return (
        <div>
            <button className='emoji' onClick={() => handleIsDone(id)}>{ isDone ? '✅' : '🔲'}</button>
            <span className={ isDone ? 'complete' : 'incomplete'}>{task}</span>
            <button className='emoji trash-icon' onClick={() => handleDeleteTask(id)}>🗑️</button>
        </div>
    );
}

export default Item;