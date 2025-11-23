const TodoData = ({ todoList, deleteTodo }) => {
    const handleDelete = (id) => {
        deleteTodo(id)
    }
    return (
        <div className='todo-data'>
            {todoList.map(item =>
                <div className='todo-items' key={item.id}>
                    <div>{item.name}</div>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default TodoData;