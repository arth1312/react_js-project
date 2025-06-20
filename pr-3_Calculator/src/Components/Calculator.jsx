import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [Buttons] = useState([ 7, 8, 9, '+', 4, 5, 6,'-', 1, 2, 3,'*', 0 ,'(', ')', '/', '00', ' .',  ]);
    const [input, setInput] = useState('');

    const handelClick = (value) => {
        setInput(prev => prev + value);
    }

    const handelClear = () => {
        setInput('');
    }
    const handelResult = () => {
        const result = eval(input);
        setInput(result.toString());
    }
    
    return (
        <>
            <h1>Calculator</h1>
            <div className="calculator">
                <input placeholder="0" type="text" value={input} />
                <div className="calculator-button">
                    {
                        Buttons.map((item, index) => (
                            <button className="btn" onClick={() => handelClick(item)} key={index}>
                                {item}
                            </button>
                        ))
                    }
                    <button className="btn" onClick={handelResult}>=</button>
                    <button className="btn" onClick={handelClear}>C</button>
                </div>
            </div>
        </>
      );
}
export default Calculator;