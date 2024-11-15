import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../assets/MOCK_DATA";
import { addPokemon } from "../redux/slices/PokemonSelectorSlice";
import { useDispatch } from "react-redux";

// 전체 리스트 상자
const StListWrapper = styled.div`
  text-align: center;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

// 카드 붙이는 부분
const StListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

function PokemonList() {
  const dispatch = useDispatch();
  const addPokemonHandler = (pokemon) => {
    dispatch(addPokemon(pokemon));
  };

  return (
    <StListWrapper>
      <h3>1세대 포켓몬 리스트</h3>
      <StListContent>
        {MOCK_DATA.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              cardButtonHandler={addPokemonHandler}
              buttonText={`추가`}
            />
          );
        })}
      </StListContent>
    </StListWrapper>
  );
}

export default PokemonList;
