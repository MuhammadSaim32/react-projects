import React, { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            msg: "ok",
            completed: false,
        }],

    Addtodo: (msg) => { },
    updateTodo: (id, msg) => { },
    deleteTodo: (id) => { },
    TogolComplete: (id) => { },



})

export const usetodo = () => {                        // a custom hook that return context   
    return useContext(todoContext);
}


export const TodoContextProvider = todoContext.Provider;


