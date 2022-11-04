import React from 'react';
import TodoItems from './TodoItems';

const todos = []


const TodoList = () => {
    return (

        <div className="row">
            <div className="col-3">
                <h5>Today</h5>
                <TodoInput />
                <TodoItems />
            </div>
            <div className="col-3">Tomorrow</div>
            <div className="col-3">This Week</div>
            <div className="col-3">Intention</div>
        </div>

    )
}

const TodoInput = () => {
    const addNewTodo = (e) => {
        console.log(e)
        if (e.key === "Enter") {
            console.log("Enter is pressed")
            const newTodo = e.target.value
            console.log(e.target.value)
            todos.push(newTodo)
            console.log(todos)
        }
    }

    return (
        <div className="mb-3">
            <input type="text" className="form-control" id="todayList" placeholder="today" onKeyPress={(e) => addNewTodo(e)} />
        </div>
    )
}



export default TodoList