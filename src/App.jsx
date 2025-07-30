import { useState } from 'react'
import { TodosProvider } from './context/TodosContext'
import { ThemeProvider } from './context/ThemeContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ThemeToggle from './components/ThemeToggle'
import FilterBar from './components/FilterBar'


function App() {

  return (
    <ThemeProvider>
      <TodosProvider>
        <div className='relative min-h-screen'>
          <ThemeToggle />

          <div className="absolute top-40 w-full z-10 flex justify-center px-4">
            <div className="w-full max-w-xl">
              <TodoForm />
              <TodoList />
              <FilterBar />
            </div>
          </div>
        </div>
      </TodosProvider>
    </ThemeProvider>

  )
}

export default App
