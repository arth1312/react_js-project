import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0)
    const handalClick = () => {
        setCount(count => count + 1)
    }
    const reset = () => {
        setCount(0)
    }
    function  handalDec(){
        if(count >  0) {
       setCount(count - 1 )
        }
        else if(count == 0){
            alert("Counter already at 0")
        }

    };
    
    return (
        <div className="counter-container">
            <h1 className="counter-title"> Counter App</h1>
            <div className="counter-display">{count}</div>
                <div className="counter-buttons">
                    <button className="btn" onClick={handalClick}>+</button>
                    <button className="btn" onClick={handalDec}>-</button>
                </div>
            <button className="btn btn-reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter