import './todo.css'
import TodoData from './TodoData'
import TodoNew from './TodoNew'
import ReactLogo from '../../assets/react.svg'
import { useState } from 'react'
const TodoApp = () => {
    const [todoList, setTodoList] = useState([])

    const addNewTodo = (name) => {
        let id = todoList.length;
        const newData = {
            id: id + 1,
            name
        }
        setTodoList([...todoList, newData])
    }

    const deleteTodo = (id) => {
        const result = todoList.filter((item) => item.id !== id);
        setTodoList(result)
    }
    return (
        <div className='todo-container'>
            <div className='todo-title'>Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            {Array.isArray(todoList) && todoList.length ?
                < TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
                : <div className='todo-image'>
                    <img src={ReactLogo} className='logo' />
                </div>
            }
        </div>);
}

export default TodoApp;