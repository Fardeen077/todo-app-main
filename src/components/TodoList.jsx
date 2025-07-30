import { useTodos } from '../context/TodosContext';
import RemoveIcon from "../images/icon-cross.svg";
import CheckedImage from "../images/icon-check.svg";

function TodoList() {
    const { getFilteredTodos, removeTodos, toggleTodos, } = useTodos();

    const filteredTodos = getFilteredTodos();

    if (filteredTodos.length === 0) return <p className='p-4 bg-gray-800 flex justify-center border-2 border-gray-700 text-white'>No todos to display</p>;

    return (
        <div className='flex justify-center items-center'>
            <ul className="mt-4 flex flex-col justify-center w-xl">
                {filteredTodos.map((todo) => (
                    <li key={todo.id} className="p-4 border-2 border-gray-700 shadow-sm dark:text-white dark:bg-gray-800">
                        <div className="flex items-center">
                            <div className="relative w-5 h-5">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodos(todo.id)}
                                    className="appearance-none w-5 h-5 rounded-full border border-gray-400 checked:bg-blue-500"
                                />
                                {todo.completed && (
                                    <img
                                        src={CheckedImage}
                                        alt="Checked"
                                        className="absolute top-1/2 left-1/2 w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                    />
                                )}
                            </div>

                            <span className={`flex-1 ml-4 ${todo.completed ? "line-through text-gray-500" : ""}`}>
                                <p className=''>{todo.text}</p>
                            </span>

                            <button onClick={() => removeTodos(todo.id)}>
                                <img src={RemoveIcon} alt="Remove" className="w-4 h-4" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
