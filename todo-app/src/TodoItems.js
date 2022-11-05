import React, { useState } from "react"

const TodoItems = (props) => {
    return (
        <ul className="list-group">
            <ShowTodos todos={props.todos} />
        </ul>
    )
}

const DoneToggle = (props) => {

    console.log("props", props)
    const [todos, setTodos] = useState(props.todos)
    const completeTodo = (e) => {
        console.log(e.target)
        const todo = props.todo
        console.log('todo', todo)


        console.log("todo before", todos)
        setTodos(todos.filter(item => item !== todo))
        console.log("todo afeter", todos)
    }

    return (
        <button id={props.id} type="button" className="btn btn-success btn-sm" onClick={(e) => {
            completeTodo(e)
        }}>Done</button>

    )
}

const DeleteToggle = () => {
    return (
        <button type="button" className="btn btn-danger btn-sm">Delete</button>
    )
}

const ShowTodos = (props) => {
    const todos = props.todos
    return (


        todos.map((todo, index) => {
            return <li className="list-group-item d-flex justify-content-between align-items-center" key={index} id={index}>
                {todo}
                <DoneToggle todos={todos} todo={todo} />
                <DeleteToggle />
            </li>
        })

    )
}

export default TodoItems