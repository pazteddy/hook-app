import React from 'react'

export const ShowIncrement = React.memo(( {increment} ) => {
  console.log(' Me volvi a cargar :(');
  return (
    <button 
    className="btn btn-danger"
    onClick = {()=> increment()}>
      Incrementar
    </button>
  )
})
