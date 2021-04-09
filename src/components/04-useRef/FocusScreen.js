import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

  //Referencia mutable 
  const inputRef = useRef();
  console.log(inputRef);
  const handleClick= () =>{
    //document.querySelector('input').select();
    inputRef.current.select();
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>
      <input 
        ref = { inputRef }
        type="text"
        className="form-control mb-2"
        placeholder="Su nombre"
      />

      <button 
        onClick={ handleClick }
        className="btn btn-outline-primary ">
          Focus
      </button>
    </div>
  )
}
