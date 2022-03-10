import React, { useState } from "react";

function ComponentEx(props) {
    const [input, setInput] = useState("");

    function handleInput(evt) {
        setInput(evt.target.value);
    }

    return(
        <div>
            <input type="text" onChange={(evt) => handleInput(evt)}></input><br />
            Hello: {input}
        </div>
    )
}

export default ComponentEx;