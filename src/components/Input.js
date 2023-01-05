import React, { useState } from "react";

function Input(props) {

    const [inputText, setInputText] = useState("");



    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        console.log(inputText)

    }



    return (
        <div className="form">
            <input value={inputText} onChange={handleChange} type="text" />
            <button onClick={() => {
                props.onAdd(inputText)
                setInputText("");
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Input;