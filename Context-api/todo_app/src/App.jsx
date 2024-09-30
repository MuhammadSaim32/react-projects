import React, { useEffect, useState } from "react";
import TodoForm from "./components/Todoform";
import TodoItem from "./components/Todoitems";
import { TodoContextProvider } from "./Conext/UseContext"
function App() {
    const [todos, settodos] = useState([]);   // holds all the data 

    const Addtodo = (todo) => {
        settodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    }

    const updateTodo = (id, todo) => {
        settodos((prev) => prev.map((value) => (value.id === id ? todo : value)))
    }


    const deleteTodo = (id) => {
        settodos((prev) => prev.filter((value) => value.id !== id))
    }

    const TogolComplete = (id) => {
        settodos((prev) => prev.map((value) => value.id === id ? { ...value, completed: !value.completed } : value))

    }
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        if (todos && todos.length > 0) {
            settodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (

        <TodoContextProvider value={{ Addtodo, updateTodo, deleteTodo, TogolComplete, todos }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                {console.log(todo)}
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </TodoContextProvider>

    )

}

export default App;
