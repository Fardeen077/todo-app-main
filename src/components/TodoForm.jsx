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
  console.log(text);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder='Enter your todos'
        value={text}
        onChange={(e) => setText(e.target.value)} />
      {/* <button type="submit">Add</button> */}
    </form>
  )
}

export default TodoForm;