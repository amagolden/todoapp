const Form = () => {
    return (
    <form>
        <input type='text' id='task-id' name='task' onChange={event => console.log(event.target.value)}></input>
        <input type='submit' value='Add Task'></input>
    </form>
    );
}

export default Form;