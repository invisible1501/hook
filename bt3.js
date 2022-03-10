import React, { useState } from "react";

function LoginForm(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleUserName(evt) {
        setUserName(evt.target.value);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    function show(evt) {
        alert(`Username: ${userName} Password: ${password}`);        
    }

    return(
        <React.Fragment>
            <div>
                <input type="text" value={userName} onChange={(evt) => handleUserName(evt)}></input>
            </div>
            <div>
                <input type="text" value={password} onChange={(evt) => handlePassword(evt)}></input>
            </div>
            <div>
                <button onClick={(evt) => show(evt)}>Login</button>
            </div>
        </React.Fragment>
    )
}

export default LoginForm;