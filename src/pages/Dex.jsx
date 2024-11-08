import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

function Dex() {
  const [pokemonList, setPokemonList] = useState([]);

  const addPokemonToDashboard = (pokemon) => {
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

  return (
    <>
      <Dashboard pokemonList={pokemonList} />
      <PokemonList addPokemonToDashboard={addPokemonToDashboard} />
    </>
  );
}

export default Dex;
