import React from "react";

function Item(props) {
    return (
        <ul>
            <li onClick = {() => {
                props.handleDelete(props.id)
            }}>{props.text}</li>
        </ul>
    )
}

export default Item;