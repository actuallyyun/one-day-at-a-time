import React, { useState } from "react"

const TodoItem = (props) => {
    const todos = props.todos

    return (
        todos.map((todo, index) => {
            return <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
                id={index}>
                {todo}
                <DoneToggle
                    todos={todos}
                    setTodos={props.setTodos}
                    todo={todo} />
                <DeleteToggle />
            </li>
        })

    )
}

const DoneToggle = (props) => {

    const todos = props.todos

    const completeTodo = (e) => {

        const todo = props.todo

        console.log('todo', todo)
        console.log("todo before", props.todos)

        const newTodos = todos.filter(todo => todo !== todo)

        props.setTodos(newTodos)

        console.log("todo after", todos)
    }

    return (
        <button id={props.id} type="button" className="btn btn-success btn-sm" onClick={(e) => {
            completeTodo(e)
        }} >Done</button>

    )
}

const DeleteToggle = () => {
    return (
        <button type="button" className="btn btn-danger btn-sm">Delete</button>
    )
}



export default TodoItem