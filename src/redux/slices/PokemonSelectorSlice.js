import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  selectedPokemonList: [],
};

const pokemonSelectorSlice = createSlice({
  name: "pokemonSelector",
  initialState: initialState,
  reducers: {
    // 포켓몬 추가
    addPokemon: (state, action) => {
      const pokemon = action.payload;
      if (
        state.selectedPokemonList.length < 6 &&
        !state.selectedPokemonList.includes(pokemon)
      ) {
        state.selectedPokemonList.push(pokemon);
        toast.success(`${pokemon.korean_name}(이)가 추가되었습니다!`);
      } else {
        if (state.selectedPokemonList.includes(pokemon)) {
          // 중복 확인
          toast.error("중복된 포켓몬이 있습니다.");
        } else {
          // 6개 초과시
          toast.error("포켓몬 최대수 6마리를 초과하였습니다.");
        }
      }
    },

    // 포켓몬 삭제
    removePokemon: (state, action) => {
      const pokemon = action.payload;
      state.selectedPokemonList = state.selectedPokemonList.filter((item) => {
        return JSON.stringify(item) !== JSON.stringify(pokemon);
      });
      toast.warn(`${pokemon.korean_name}(이)가 제거되었습니다`);
    },

    // 포켓몬 전체 삭제
    clearPokemonList: (state) => {
      state.selectedPokemonList = [];
      toast.warn("리스트가 초기화 되었습니다.");
    },
  },
});

export const { addPokemon, removePokemon, clearPokemonList } =
  pokemonSelectorSlice.actions;
export default pokemonSelectorSlice.reducer;
