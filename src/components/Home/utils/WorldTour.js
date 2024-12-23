import React, { useEffect, useRef } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';
// import define from 'https://api.observablehq.com/d/0c9ac32c1357dbd5.js?v=4';
import define from '../../../assets/world-tour';

const WorldTour = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a new Observable runtime and render to the canvasRef div
    const runtime = new Runtime();
    runtime.module(define, name => {
      if (name === 'canvas') return new Inspector(canvasRef.current);
    });

    // Cleanup the runtime when the component unmounts
    return () => runtime.dispose();
  }, []);

  return (
    <div className='w-full'>
      <div id="observablehq-canvas-ec88052a" ref={canvasRef}></div>
    </div>
  );
};

export default WorldTour;
