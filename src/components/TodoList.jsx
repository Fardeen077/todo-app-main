import { useTodos } from '../context/TodosContext'

function TodoList() {
    
const { todos } = useTodos();
if(todos.length === 0) return <p>Todos is empty</p>

    return (
        <ul className="mt-4 space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="p-2 border rounded shadow-sm bg-white dark:bg-gray-800 dark:text-white"
                >
                    {todo.text}
                    {console.log(todo)}
                </li>
            ))}
        </ul>
    )
}

export default TodoList
