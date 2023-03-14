import TodoList from './components/TodoList';
import UserList from './components/UserList'
import "./style.css";


const App = () => {
  return (
    <div>
      <UserList/>
      <hr/>
      <TodoList/>
    </div>
  )
}

export default App