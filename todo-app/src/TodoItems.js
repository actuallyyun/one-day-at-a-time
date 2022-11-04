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
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
            <label className="custom-control-label" >Done</label>
        </div>
    )
}

const DeleteToggle = () => {
    return (
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
            <label className="custom-control-label">Delete</label>
        </div>
    )
}

const ShowTodos = (props) => {
    return (

        props.todos.map(todo => {
            return <li className="list-group-item d-flex justify-content-between align-items-center">
                {todo}
                <DoneToggle />
                <DeleteToggle />
            </li>
        })

    )
}

export default TodoItems