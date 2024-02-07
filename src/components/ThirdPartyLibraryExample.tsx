import React, { FC } from 'react';
import { useFetchQueryData } from "../hooks/useFetchQueryData";
import { PokemonResponse } from "../types/PokemonResponse";

const ThirdPartyLibraryExample: FC = () => {
  const { data: bulbasaur, isLoading } = useFetchQueryData<PokemonResponse>('pokemon/bulbasaur');
  return (
    <div>
      <h3>Third Party Library Example</h3>
      {isLoading || !bulbasaur ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={bulbasaur.sprites.front_default} alt={bulbasaur.species.name} />
          <h6>{bulbasaur.species.name}</h6>
        </div>
      )}
    </div>
  );
};

export default ThirdPartyLibraryExample;