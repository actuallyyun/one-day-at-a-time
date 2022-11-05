import React from "react";
import TodoItem from "./TodoItem"

const ListBody = (props) => {

    const todos = props.todos
    console.log('todos in listbody', todos)

    if (todos.length > 0) {
        return (<DisplayTodos
            todos={todos}
            setTodos={props.setTodos}
        />)
    } else {
        return (<EmptyTodo />)

    }
}


const DisplayTodos = (props) => {

    return (
        <ul className="list-group">
            <TodoItem
                todos={props.todos}
                setTodos={props.setTodos}
            />
        </ul>
    )
}

const EmptyTodo = () => {
    return (
        <div>
            <span> You do not have any todos yet.</span >
        </div >
    )
}



export default ListBody