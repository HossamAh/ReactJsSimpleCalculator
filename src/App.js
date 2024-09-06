import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));  
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));  
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    //function to make the output returns to setResult and update the value.
    setResult((result) => result / Number(inputRef.current.value));  
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value=0; 
  }; 
 
  function resetResult(e) {
    e.preventDefault();  
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          className="text-input"
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <div className="buttons">
        <button onClick={plus}>add</button> 
        <button onClick={minus}>minus</button> 
        <button onClick={times}>times</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>resetInput</button> 
        <button onClick={resetResult}>resetResult</button>  
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
