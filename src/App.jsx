import { useState } from "react";
import "./App.css";
import Router from "./shared/Router";
import { PokemonContext } from "./context/PokemonContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // 대시보드에 저장할 리스트
  const [pokemonList, setPokemonList] = useState([]);

  // 포켓몬 추가
  const addPokemonHandler = (pokemon) => {
    setPokemonList((prevList) => {
      if (prevList.length < 6 && !prevList.includes(pokemon)) {
        toast.success("포켓몬이 추가되었습니다!");
        return [...prevList, pokemon];
      } else {
        if (prevList.includes(pokemon)) {
          // 중복 확인
          toast.error("중복된 포켓몬이 있습니다.");
        } else {
          // 6개 초과시
          toast.error("6개 초과");
        }
        // 이전 리스트 그대로 반환
        return [...prevList];
      }
    });
  };

  // 포켓몬 삭제
  const removePokemonHendler = (pokemon) => {
    setPokemonList((prevList) => {
      const newList = prevList.filter((item) => {
        return JSON.stringify(item) !== JSON.stringify(pokemon);
      });

      return [...newList];
    });
  };

  // 포켓몬 전체 삭제
  const removeAllPokemon = () => {
    setPokemonList([]);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        addPokemonHandler,
        removePokemonHendler,
        removeAllPokemon,
      }}
    >
      <Router />
      <ToastContainer
        position="top-right" // 알람 위치 지정
        autoClose={2000} // 자동 off 시간
        hideProgressBar={true} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
      />
    </PokemonContext.Provider>
  );
}

export default App;
