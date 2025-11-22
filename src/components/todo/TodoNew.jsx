const TodoNew = ({ addNewTodo }) => {
    // addNewTodo('Kenzo');
    return (
        <div className='todo-new'>
            <input type='text' placeholder='Enter your task' />
            <button>Add</button>
        </div>
    );
}

export default TodoNew;