import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
  
  const [id, setId] = useState(1);
    const {addTodo} = useTodo()
    const [todo , setTodo] = useState("")
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!todo) return
      addTodo({id : id, Todo : todo , completed: false})
      setTodo("")
      setId(prev => prev+1)
    }
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text" value={todo} onChange={e => setTodo(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;