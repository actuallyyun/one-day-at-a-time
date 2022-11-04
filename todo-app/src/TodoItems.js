import React from "react"

const TodoItems = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <DoneToggle />
                <DeleteToggle />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
            </li>
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


export default TodoItems