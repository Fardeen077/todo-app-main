import { useState } from "react";
import { useTodos } from "../context/TodosContext"

function TodoForm() {
  const { addTodos } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodos(text);
    setText("");
  }
  // console.log(text);

  return (
    <div className="flex justify-center bg-gray-800 py-4">
      <form onSubmit={handleSubmit}>
        <input type="text"
          className="w-xl h-10 text-white hover:outline-none "
          placeholder='Enter your todos'
          value={text}
          onChange={(e) => setText(e.target.value)} />
        {/* <button type="submit">Add</button> */}
      </form>
    </div>
  )
}

export default TodoForm;