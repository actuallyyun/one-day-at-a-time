import React from "react";

const FinishedListBody = (props) => {
    if (props.finishedTodos.length > 0) {
        return (
            <ul className="list-group">
                <ShowFinishedList todos={props.finishedTodos} />
            </ul>
        )
    }
}

const ShowFinishedList = (props) => {
    return (
        props.todos.map((todo, index) => {
            return <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
                id={index}>
                {todo}
            </li>

        })
    )
}

export default FinishedListBody