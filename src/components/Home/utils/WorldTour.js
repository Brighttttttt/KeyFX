import React, { useEffect, useRef } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';
import usd from '../../../assets/svg/home/usd.svg';
import eur from '../../../assets/svg/home/eur.svg';
import gbp from '../../../assets/svg/home/gbp.svg';
import jpy from '../../../assets/svg/home/jpy.svg';
import inr from '../../../assets/svg/home/inr.svg';

// Import the Observable module definition
import define from 'https://api.observablehq.com/d/2c3290c8b3628eaf@356.js?v=4';

// React Component
const ObservableCanvas = () => {
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
        <img src={usd} alt="usd" className='usdIcon'/>
        <img src={eur} alt="eur" className='eurIcon'/>
        <img src={gbp} alt="gbp" className='gbpIcon'/>
        <img src={jpy} alt="jpy" className='jpyIcon'/>
        <img src={inr} alt="inr" className='inrIcon'/>
      {/*<img className='mx-auto absolute z-999 curr-icons' alt="Not Available" src="/Icons/SectionCurrency.png" />*/}
      </div>
      
      <div id="observablehq-canvas-ec88052a" ref={canvasRef}></div>
      </div>
  );
};

export default ObservableCanvas;
