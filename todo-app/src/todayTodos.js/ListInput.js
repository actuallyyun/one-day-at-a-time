import React from "react";

const ListInput = (props) => {
    const todos = props.todos
    const setTodos = props.setTodos

    const addNewTodo = (e) => {
        //When user presses "Enter" key, a new todo is created 
        if (e.key === "Enter") {
            const newTodo = e.target.value.trim()

            //User cannot create todo with empty string nor dulipcated todo
            if (newTodo.length !== 0 && !isDuplicatedTodo(newTodo)) {
                setTodos(todos.concat(newTodo))
                //empty input area
                e.target.value = ""
            }
        }
    }
    const isDuplicatedTodo = (todo) => {
        return todos.includes(todo)
    }

    return (
        <div className="mb-3">
            <input type="text" className="form-control" id="addTodo" placeholder="today" onKeyPress={(e) => { addNewTodo(e) }} />
        </div>
    )
}


export default ListInput