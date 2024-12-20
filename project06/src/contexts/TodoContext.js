import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            Todo: "title",
            completed: false
        }
    ],
    addTodo: () => { },
    deleteTodo: () => { },
    updateTodo: () => { },
    completedTodo: ()=> {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo= () => {
    return useContext(TodoContext)
}