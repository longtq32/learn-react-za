import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './components/todo/todoNew'
import TodoNew from './components/todo/todoNew'
import TodoData from './components/todo/todoData'

import './components/todo/todo.css'

const App = () => {

  return (
    <>
      <div className='todo-container'>
        <div className="todo-title">Todo List</div>

        <TodoNew />
        <TodoData />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>

      </div>
    </>
  )
}

export default App
