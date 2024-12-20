
import { useEffect, useState } from 'react';
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (Todo) => {
    setTodos((prev)=> [...prev,Todo])
  }
  const deleteTodo = (id) => {
    setTodos( prev => prev.filter((prevTodo)=> prevTodo.id !== id ))
   };
  const updateTodo = (id, Todo) => {
    setTodos(prev => prev.map((prevTodo) => (prevTodo.id == id) ? Todo : prevTodo))
  };
  const completedTodo = (id ,Todo) => {
    setTodos((prev) => prev.map((prevTodo) =>
        (prevTodo.id == id) ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo ))
  };
  
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));

    if (todo && todo.length > 0) {
      setTodos(todo)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, completedTodo }}
    >
      <div className="bg-[#172842] w-full min-h-screen py-8">
        <div className="w-full max-w-4xl bg-[#17335c]  mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((e) => (
              <TodoItem key={e.id} todo={e} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
