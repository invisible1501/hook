import React, { useState } from "react";

function GetTime(props) {
    const [time, setTime] = useState("");

    function handleTime(evt) {
        let _clock = new Date();
        let _time = _clock.getHours() + ":" + _clock.getMinutes() + ":" + _clock.getSeconds();
        setTime(_time);
    }

    return(
        <div>
            {time}<br />
            <button onClick={(evt) => handleTime(evt)}>CLick here to get time</button>
        </div>
    )
}

export default GetTime;