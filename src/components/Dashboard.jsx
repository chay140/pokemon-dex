import styled from "styled-components";
import Pokeball from "../assets/pokeball.png";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

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

const StCellWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  width: 90%;
  justify-content: center;
  justify-items: center;
`;

const StImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 6px double rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const StPokeballImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

// 메모이제이션 필요해 보임 (추후에 추가하기)
function EmptyCell() {
  return (
    <StImgWrapper>
      <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon" />
    </StImgWrapper>
  );
}

function Dashboard() {
  const pokemonList = useContext(PokemonContext).pokemonList;
  const removePokemonHendler = useContext(PokemonContext).removePokemonHendler;

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
                cardButtonHandler={removePokemonHendler}
              />
            );
          } else {
            return <EmptyCell key={Math.random()} />;
          }
        })}
      </StCellWrapper>
    </StyledDashboard>
  );
}

export default Dashboard;
