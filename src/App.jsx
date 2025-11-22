import './components/todo/Todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'

const App = () => {
  const name = 'kenzongo';
  const age = 25;
  const data = {
    address: 'travinh',
    country: 'vietnam'
  }
  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
