import React, { useState } from 'react';
import ListInput from './todayTodos.js/ListInput';
import ListBody from './todayTodos.js/ListBody';
import FinishedListBody from './finishedTodos/FinishedListBody';

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [finishedTodos, setFinishedTodos] = useState([])

    return (
        < div className="row" >
            <div className="col-3">
                <ListHeader title={"Today"} />
                <ListInput
                    todos={todos}
                    setTodos={setTodos}
                />
                < ListBody
                    todos={todos}
                    setTodos={setTodos}
                    finishedTodos={finishedTodos}
                    setFinishedTodos={setFinishedTodos}
                />
            </div>
            <div className="col-3">
                <ListHeader title={"Done"} />
                <FinishedListBody finishedTodos={finishedTodos} />


            </div>
            <div className="col-3">
                <ListHeader title={"Later"} />

            </div>
            <div className="col-3">
                <ListHeader title={"My Intention"} />

            </div>
        </div >

    )
}


const ListHeader = (props) => {
    return <h5>{props.title}</h5>
}



export default TodoList