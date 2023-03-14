import { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {Loader} from './Loader'

const TodoList: FC = () => {
    const {todos, page, error, loading, limit } = useTypedSelector( state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()

    const pages = [ 1, 2, 3, 4, 5 ]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])
   

    if (loading){        
      return <Loader />
    }
    if (error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
            <div className='pagination'>
            {pages.map(p => 
            <div className={p === page ? 'current-page' : 'page'}
            onClick={() => setTodoPage(p)}
            key={p}>
                {p}
            </div>
            )}
            </div>
        </div>
      )
}

export default TodoList