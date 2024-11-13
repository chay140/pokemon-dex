import styled from "styled-components";
import RestartImg from "../assets/pixel_restart.png";
import PokemonCard from "./PokemonCard";
import PokeballCell from "./PokeballCell";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPokemonList,
  removePokemon,
} from "../redux/slices/PokemonSelectorSlice";

// 대시보드 영역
const StyledDashboard = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(221, 221, 221);
  margin-bottom: 20px;
  border-radius: 10px;
`;

// 6개 셀 만들기
const StCellWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 20px;
  gap: 10px;
  min-height: 250px;
  justify-items: stretch;
  align-items: center;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

// 초기화 버튼
const StResetBtn = styled.button`
  margin-top: 30px;
  background-color: rgb(255, 255, 255);
  border: 6px double rgb(204, 204, 204);
  border-radius: 5px;
  cursor: pointer;
`;

// 초기화 이미지
const StResetImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

function Dashboard() {
  const dispatch = useDispatch();

  // 리스트 받아오기 (redux 사용)
  const pokemonList = useSelector(
    (state) => state.pokemonSelector.selectedPokemonList
  );
  const removePokemonHandler = (pokemon) => {
    dispatch(removePokemon(pokemon));
  };
  const clearPokemonHandler = () => {
    dispatch(clearPokemonList());
  };

  // 비어있는 슬롯 수
  const emptyCell = Array(6 - pokemonList.length).fill({});

  return (
    <StyledDashboard>
      <h3>나만의 포케몬</h3>
      <StCellWrapper>
        {[...pokemonList, ...emptyCell].map((pokemon) => {
          if (Object.keys(pokemon).length > 0) {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                buttonText={`삭제`}
                cardButtonHandler={removePokemonHandler}
              />
            );
          } else {
            {
              /* TODO key 어떡하지...  */
            }
            return <PokeballCell key={Math.random()} />;
          }
        })}
      </StCellWrapper>
      <StResetBtn onClick={clearPokemonHandler}>
        <StResetImg src={RestartImg} alt="" />
      </StResetBtn>
    </StyledDashboard>
  );
}

export default Dashboard;
