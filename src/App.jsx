import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'
import './styles/global.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'

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

  const deleteTodo = (id) => {
    const result = todoList.filter((item) => item.id !== id);
    setTodoList(result)
  }
  return (
    <>
      <Header />
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
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
