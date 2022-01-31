import React, { useState } from "react";

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Hello from clock</p>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default ClickCounter;