import { useState } from "react";
import "./App.css";
import Router from "./shared/Router";
import { PokemonContext } from "./context/PokemonContext";

function App() {
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

  const removeAllPokemon = () => {
    setPokemonList([]);
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonList, addPokemonHandler, removePokemonHendler, removeAllPokemon }}
    >
      <Router />
    </PokemonContext.Provider>
  );
}

export default App;
