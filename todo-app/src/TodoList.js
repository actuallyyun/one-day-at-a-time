import React, { useState } from 'react';
import TodoItems from './TodoItems';

// const todos = []


const TodoList = () => {

    const [todos, setTodos] = useState([])

    const addNewTodo = (e) => {
        //When user presses "Enter" key, a new todo is created 
        if (e.key === "Enter") {
            const newTodo = e.target.value
            if (newTodo.length !== 0) {
                setTodos(todos.concat(newTodo))
                console.log(todos)
                //empty input area
                e.target.value = ""

            }
        }
    }

    return (
        < div className="row" >
            <div className="col-3">
                <ListHeader />
                <div className="mb-3">
                    <input type="text" className="form-control" id="addTodo" placeholder="today" onKeyPress={(e) => { addNewTodo(e) }} />
                </div>
                <ListContent todos={todos} />
            </div>
            <div className="col-3">Tomorrow</div>
            <div className="col-3">This Week</div>
            <div className="col-3">Intention</div>
        </div >

    )
}


const ListContent = (props) => {
    const todos = props.todos
    if (todos.length > 0) {
        return (<TodoItems todos={todos} />)
    } else {
        return (<EmptyTodo />)
    }
}
const ListHeader = () => {
    return <h5>Today</h5>
}



const EmptyTodo = () => {
    return (
        <div>
            <span> You do not have any todos yet.</span >
        </div >
    )
}




export default TodoList