import React, { FC } from 'react';
import { useFetchData } from "../hooks/useFetchData";
import { PokemonResponse } from "../types/PokemonResponse";

const CustomHookExample: FC = () => {
  const [ditto, loading] = useFetchData<PokemonResponse>('pokemon/ditto');
  
  return (
    <div>
      <h3>Custom Hook Example</h3>
      {loading || !ditto ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={ditto.sprites.front_default} alt={ditto.species.name}/>
          <h6>{ditto.species.name}</h6>
        </div>
      )}
    </div>
  );
};

export default CustomHookExample;