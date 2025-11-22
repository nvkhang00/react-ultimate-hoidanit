const TodoNew = ({ addNewTodo }) => {
    // addNewTodo('Kenzo');

    const handleOnChange = (value) => {
        console.log('>>>> Call handle onchange', value)
    }

    const handleOnClick = (value) => {
        alert('>>>> Click me')
    }
    return (
        <div className='todo-new'>
            <input onChange={(e) => handleOnChange(e.target.value)} type='text' placeholder='Enter your task' />
            <button onClick={handleOnClick}>Add</button>
        </div>
    );
}

export default TodoNew;