import { createContext, useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

const TodosContext = createContext();

export const useTodos = () => useContext(TodosContext);

export const TodosProvider = ({ children }) => {

    // Default todos showing 
    const defaultTodos = [
        { id: 1, completed: true, text: "Complete online Javascript course" },
        { id: 2, completed: true, text: "Jog around the park 3x" },
        { id: 3, completed: true, text: "10 minutes meditation" },
        { id: 4, completed: true, text: "Read for 1 hour" },
        { id: 5, completed: true, text: "Pick up groceries" },
        { id: 6, completed: true, text: "Completed Todo App on Frontend Mentor" }
    ]

    // TODOS ARRAY 
    const [todos, setTodos] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("todos"));
        return localData === null ? defaultTodos : localData;
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    // THIS FUNCTION IS CREATE NEW TODO IN TODOS ARRAY 
    const addTodos = (text) => {
        const newTodo = {
            id: nanoid(),
            completed: false,
            text,
        };
        setTodos((prev) => [newTodo, ...prev]);
    };
    // THIS REMOVE FUNCTION ARE RETURN NEW TODOS ARRAY
    const removeTodos = (id) => setTodos((prev) => prev.filter((todo) => todo.id !== id));

    // UPDATETODOS FUNCTION
    const updateTodos = (id, text) => setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, text } : todo));


    // THIS FUNCTION IS USE FOR CHACK ALL TODOS STATUS
    const getAllTodos = () => todos;

    // FUNCTION FOR CHECK ACTIVE TODOS IN TODOLIST
    const getActiveTodos = () => todos.filter(todo => !todo.completed);

    // FUNCTION FOR GET ALL COMPLETED TODOS IN TODOLISTS
    const getCompletedTodos = () => todos.filter(todo => todo.completed);

    // CLEAR ALL TODO
    const clearTodos = () => setTodos([]);


    return (
        <TodosContext.Provider value={{ addTodos, removeTodos, updateTodos, getAllTodos, getActiveTodos, getCompletedTodos, clearTodos, todos }}>
            {children}
        </TodosContext.Provider>
    )
}