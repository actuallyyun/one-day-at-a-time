import React from "react"

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
                    todo={todo}
                    finishedTodos={props.finishedTodos}
                    setFinishedTodos={props.setFinishedTodos}
                />
                <DeleteToggle
                    todos={todos}
                    setTodos={props.setTodos}
                    todo={todo}
                />
            </li>
        })

    )
}

const DoneToggle = (props) => {
    //todo after removing it, the item should be saved into Done list
    const todos = props.todos

    const completeTodo = (e) => {

        const todo = props.todo
        const newTodos = todos.filter(item => item !== todo)
        props.setFinishedTodos(props.finishedTodos.concat(todo))

        props.setTodos(newTodos)
    }

    return (
        <button id={props.id} type="button" className="btn btn-success btn-sm" onClick={(e) => {
            completeTodo(e)
        }} >Done</button>

    )
}

const DeleteToggle = (props) => {
    const todos = props.todos
    const setTodos = props.setTodos

    const handleClick = (todo) => {
        console.log(todo)
        const newTodos = todos.filter(item => item !== todo)
        setTodos(newTodos)
    }

    return (
        <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handleClick(props.todo)}
        >Delete</button>
    )
}



export default TodoItem