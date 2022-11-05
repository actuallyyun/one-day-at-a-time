import React from "react"

const TodoItems = (props) => {
    return (
        <ul className="list-group">
            <ShowTodos todos={props.todos} />
        </ul>
    )
}

const DoneToggle = () => {
    return (
        <button type="button" className="btn btn-success btn-sm">Done</button>

    )
}

const DeleteToggle = () => {
    return (
        <button type="button" className="btn btn-danger btn-sm">Delete</button>
    )
}

const ShowTodos = (props) => {
    return (

        props.todos.map((todo, index) => {
            return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {todo}
                <DoneToggle />
                <DeleteToggle />
            </li>
        })

    )
}

export default TodoItems