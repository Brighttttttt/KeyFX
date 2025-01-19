import React, {useEffect, useRef} from 'react';
import {Runtime} from '@observablehq/runtime';
import {Inspector} from '@observablehq/inspector';

const WorldTour = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadModule = async () => {
            const {default: define} = await import('../../../assets/world-tour');
            const runtime = new Runtime();
            runtime.module(define, name => {
                if (name === 'canvas') return new Inspector(canvasRef.current);
            });
            return () => {
                runtime.dispose();
                canvasRef.current.innerHTML = "";
            };
        };
        loadModule();
    }, []);

    return (
        <div className='w-full'>
            <div ref={canvasRef}></div>
        </div>
    );
};

export default WorldTour;