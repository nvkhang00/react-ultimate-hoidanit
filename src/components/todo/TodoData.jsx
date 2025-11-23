const TodoData = ({ todoList }) => {
    return (
        <div className='todo-data'>
            {todoList.map(item =>
                <div className='todo-items' key={item.id}>
                    <div>{item.name}</div>
                    <button>Delete</button>
                </div>
            )}
        </div>
    );
}

export default TodoData;