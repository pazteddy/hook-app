import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote }= !!data&&data[0];
  
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr/>
      {
        loading
        ?
        (
        <div className="alert alert-info text-cener">
        Loading...
        </div>
        )
        :
        (
        <blockquote className="blockquote text-end">
        <p className="mb-3">{ quote }</p>
        <footer className="blockquote-footer">{ author }</footer>
        </blockquote>
        )
      }
      <button onClick={ () => increment(1)} className="btn btn-primary">
        Siguiente Frase
      </button>

    </div>
  )
}
