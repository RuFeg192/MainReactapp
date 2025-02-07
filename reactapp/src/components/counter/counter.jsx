import React, { useEffect, useState } from "react";
import Button from "../common/button/button";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => { 
        console.log('Count has changed!') 
    }, [count])

    return (
        <div>
            <h1>Counter component:</h1>
            <h2>{count} likes</h2>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
            <Button onClick={() => setCount(count - 1)}>-1</Button>

            <Button onClick={() => setCount(0)}>Reset count</Button>
        </div>
    );
};

export default Counter;