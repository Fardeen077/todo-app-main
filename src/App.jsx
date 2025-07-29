import { useState } from 'react'
import { TodosProvider } from './context/TodosContext'
import { ThemeProvider } from './context/ThemeContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <TodosProvider>
        <ThemeToggle />
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </ThemeProvider>

  )
}

export default App
