import './components/todo/Todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learning React' },
    { id: 2, name: 'Watching Youtube' }
  ])
  const name = 'kenzongo';
  const age = 25;
  const data = {
    address: 'travinh',
    country: 'vietnam'
  }

  const addNewTodo = (value) => {
    alert(`call me ${value}`)
  }
  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
