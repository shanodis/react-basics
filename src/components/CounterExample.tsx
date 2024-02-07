import React, { Dispatch, FC, SetStateAction } from 'react';

type CounterExampleProps = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

const CounterExample: FC<CounterExampleProps> = ({ setCounter, counter }) => (
  <>
    <button onClick={() => setCounter(counter + 1)}>Increment</button>
    <p>Counter value: {counter}</p>
  </>
);

export default CounterExample;