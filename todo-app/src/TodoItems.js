import React from "react"

const TodoItems = () => {
    return (
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <DoneToggle />
                <DeleteToggle />
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <span class="badge badge-primary badge-pill">1</span>
            </li>
        </ul>
    )
}

const DoneToggle = () => {
    return (
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
            <label class="custom-control-label" for="customRadioInline1">Done</label>
        </div>
    )
}

const DeleteToggle = () => {
    return (
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" />
            <label class="custom-control-label" for="customRadioInline2">Delete</label>
        </div>
    )
}


export default TodoItems