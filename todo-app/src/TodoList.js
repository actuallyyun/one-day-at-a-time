import React, { useState } from 'react';
import ListInput from './ListInput';
import ListBody from './ListBody';

const TodoList = () => {

    const [todos, setTodos] = useState([])
    return (
        < div className="row" >
            <div className="col-3">
                <ListHeader />
                <ListInput
                    todos={todos}
                    setTodos={setTodos}
                />
                < ListBody
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            <div className="col-3">Tomorrow</div>
            <div className="col-3">This Week</div>
            <div className="col-3">Intention</div>
        </div >

    )
}


const ListHeader = () => {
    return <h5>Today</h5>
}



export default TodoList