import React, { FC, useCallback, useEffect, useState } from 'react';

type CallbackMemoExampleProps = {
  counter: number;
};

const CallbackExample: FC<CallbackMemoExampleProps> = ({ counter }) => {
  const [calls, setCalls] = useState(0);
  
  const callback = useCallback(() => {
    console.log('Callback has been called');
    if (counter > 5) {
      setCalls((prevState) => prevState + 1);
    }
  }, [counter]);
  
  const badCallback = () => {
    console.log('Bad callback has been called');
    if (counter > 5) {
      setCalls((prevState) => prevState + 1);
    }
  };
  
  useEffect(() => {
    callback();
    // badCallback();
  }, [callback]);
  
  return (
    <div>
      <h3>Callback Viewer</h3>
      <p>Calls: {calls}</p>
    </div>
  );
};

export default CallbackExample;