import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter( 100 );
  const [show, setShow] = useState(true);
  
  const memoProcesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter:  <small>{counter}</small> </h3>
      <hr/>
      <p> { memoProcesado }</p>
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
