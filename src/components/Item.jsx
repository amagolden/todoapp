const Item = ({ task, id, handleDeleteTask, handleIsDone, isDone }) => {
    return (
        <div>
            <button onClick={() => handleIsDone(id)}>🔲</button>
            {task}
            <button onClick={() => handleDeleteTask(id)}>🗑️</button>
        </div>
    );
}

export default Item;