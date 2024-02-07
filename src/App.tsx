import React, { lazy, Suspense, useState } from 'react';
import { DataProvider } from "./providers/DataProvider";
import ContextDataExample from "./components/ContextDataExample";
import MemoExample from "./components/MemoExample";
import CounterExample from "./components/CounterExample";
import CallbackExample from "./components/CallbackExample";
import EffectExample from "./components/EffectExample";
import CustomHookExample from "./components/CustomHookExample";
import ThirdPartyLibraryExample from "./components/ThirdPartyLibraryExample";

const LazyComponentExample = lazy(() => import('./components/LazyComponentExample'));

const contextData = {
  id: 1,
  fullName: 'John Doe',
  email: 'john.doe@example.com',
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <CounterExample counter={counter} setCounter={setCounter}/>
      <hr/>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponentExample />
      </Suspense>
      <hr/>
      
      <EffectExample counter={counter} setCounter={setCounter} />
      <hr/>

      <MemoExample counter={counter}/>
      <hr/>
      
      <CallbackExample counter={counter}/>
      <hr/>

      <DataProvider value={contextData}>
        <ContextDataExample/>
      </DataProvider>
      <hr/>

      <CustomHookExample />
      <hr/>
      
      <ThirdPartyLibraryExample />
    </>
  );
};

export default App;
