import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coodrs, setCoodrs] = useState({ x:0, y:0});
  const { x, y } = coodrs;
  useEffect(() => {
    // console.log(' Componente montado');
    const mouseMove = (e)=>{
      const coords = { x:e.x , y:e.y };
      setCoodrs(coords);
      //console.log(coords);
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      // console.log(' Componente desmontado');
      window.removeEventListener('mousemove',mouseMove);
    }
  }, []);
  return (
    <>
      <h3>Eres genial!</h3>
      <p>
        x: { x } y: { y }
      </p>
    </>
  )
}
