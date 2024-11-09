import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonContext } from "../context/PokemonContext";

function Dex() {
  const [pokemonList, setPokemonList] = useState([]);

  const addPokemonHandler = (pokemon) => {
    setPokemonList((prevList) => {
      if (prevList.length < 6 && !prevList.includes(pokemon)) {
        return [...prevList, pokemon];
      } else {
        if (prevList.includes(pokemon)) {
          // 중복 확인
          alert("중복된 포켓몬이 있습니다.");
        } else {
          // 6개 초과시
          alert("6개 초과");
        }

        return [...prevList];
      }
    });
  };

  const removePokemonHendler = (pokemon) => { 
    setPokemonList((prevList) => {
      const newList = prevList.filter((item) => {
        return JSON.stringify(item) !== JSON.stringify(pokemon);
      });

      return [...newList];
    });
  };

  return (
    <PokemonContext>
      <Dashboard pokemonList={pokemonList} removePokemonHendler={removePokemonHendler} />
      <PokemonList addPokemonHandler={addPokemonHandler} />
    </PokemonContext>
  );
}

export default Dex;
