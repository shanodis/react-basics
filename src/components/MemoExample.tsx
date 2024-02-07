import React, { FC, useMemo } from 'react';

type MemoExampleProps = {
  counter: number;
};

const MemoExample: FC<MemoExampleProps> = ({ counter }) => {
  const calculatedState = useMemo(() => {
    return counter > 5 ? 'State has changed' : 'State has not changed';
  }, [counter]);
  
  return (
    <div>
      <h3>Memo Viewer</h3>
      <p>{calculatedState}</p>
    </div>
  );
};

export default MemoExample;