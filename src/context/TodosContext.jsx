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
    // ALL TODOS FILTER FUN
    const [filter, setFilter] = useState("all");

    // THIS REMOVE FUNCTION ARE RETURN NEW TODOS ARRAY
    const removeTodos = (id) => setTodos((prev) => prev.filter((todo) => todo.id !== id));

    // UPDATETODOS FUNCTION
    const updateTodos = (id, text) => setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, text } : todo));


    // ADD FILTER TODOS 
    const getFilteredTodos = () => {
    switch (filter) {
        case "active":
            return todos.filter(todo => !todo.completed); // ✅ active = not completed
        case "completed":
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};

    // FUNCTION FOR GET ALL COMPLETED TODOS IN TODOLISTS
    const getCompletedTodos = () => todos.filter(todo => todo.completed);

    // CLEAR ALL TODO
    const clearTodos = () => setTodos([]);

    const toggleTodos = (id) => {
        setTodos((prevTodo) => prevTodo.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }


    return (
        <TodosContext.Provider value={{ addTodos, removeTodos, updateTodos,  getCompletedTodos, clearTodos, todos, filter, setFilter, getFilteredTodos, toggleTodos }}>
            {children}
        </TodosContext.Provider>
    )
}