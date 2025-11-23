import './components/todo/Todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([])

  const addNewTodo = (name) => {
    let id = todoList.length;
    const newData = {
      id: id + 1,
      name
    }
    setTodoList([...todoList, newData])
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
        />
        : <div className='todo-image'>
          <img src={ReactLogo} className='logo' />
        </div>
      }
    </div>
  )
}

export default App
