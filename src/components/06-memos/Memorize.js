import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effects.css';

export const Memorize = () => {
  const { counter, increment } = useCounter( 10 );
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Counter:  <Small value= {counter}/> </h1>
      <hr/>
      <button 
      onClick={ () =>{ increment(1)}}
      className="btn btn-primary">
        +1
      </button>
      <button 
      onClick={ () =>{ setShow( !show) }}
      className="btn btn-primary">
        Show/Hide {JSON.stringify( show )}
      </button>
    </div>
  )
}
