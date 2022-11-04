import React from 'react';
import TodoItems from './TodoItems';




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
    return (
        <div class="mb-3">
            <input type="text" class="form-control" id="todayList" placeholder="today" />
        </div>
    )
}



export default TodoList