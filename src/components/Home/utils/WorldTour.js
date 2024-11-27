import React, { useEffect, useRef } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';

// Import the Observable module definition
import define from '../../../assets/world-tour';

// React Component
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
      <div className='mx-auto w-full flex justify-center items-start relative h-full'>
        {/*{isReady ? (*/}
        {/*  <img src={currencyIcon} alt="currencyIcon" className='currencyIcon'/>*/}
        {/*) : null}*/}
        {/*<img src={usd} alt="usd" className='usdIcon'/>*/}
        {/*<img src={eur} alt="eur" className='eurIcon'/>*/}
        {/*<img src={gbp} alt="gbp" className='gbpIcon'/>*/}
        {/*<img src={jpy} alt="jpy" className='jpyIcon'/>*/}
        {/*<img src={inr} alt="inr" className='inrIcon'/>*/}
        {/*<img className='mx-auto absolute z-999 curr-icons' alt="Not Available" src="/Icons/SectionCurrency.png" />*/}
      </div>
      
      <div id="observablehq-canvas-ec88052a" ref={canvasRef}></div>
    </div>
  );
};

export default WorldTour;
