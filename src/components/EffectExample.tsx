import React, { FC, useEffect } from 'react';

type EffectExampleProps = {
  counter: number;
  setCounter: (value: number) => void;
};

const EffectExample: FC<EffectExampleProps> = ({ counter, setCounter }) => {
  useEffect(() => {
    console.log('EffectExample component mounted');
    return () => {
      console.log('EffectExample component unmounted');
    };
  }, []);

  useEffect(() => {
    if (counter > 10) {
      setCounter(0);
    }
    
    return () => {
      console.log('EffectExample counter effect cleanup', counter);
    }
  }, [counter, setCounter]);
  
  return (
    <div>
      <h3>Effect Example (see console)</h3>
    </div>
  );
};

export default EffectExample;