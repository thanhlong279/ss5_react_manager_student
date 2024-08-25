import {useState} from "react";

function DemoStateFunc() {
    const [num, setNum] = useState(0);
    const increment = () => {
        setNum(prevState => prevState +1)
        setNum(prevState => prevState +1)
        setNum(prevState => prevState +1)
    }
    return (
        <>
            <h1>{num}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default DemoStateFunc;