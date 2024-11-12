import styled from "styled-components";
import RestartImg from "../assets/pixel_restart.png";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokeballCell from "./PokeballCell";

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
  margin-top: 20px;
  gap: 20px;
  width: 90%;
  height: 200px;
  justify-items: stretch;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StResetBtn = styled.button`
  margin-top: 30px;
  background-color: rgb(255, 255, 255);
  border: 6px double rgb(204, 204, 204);
  border-radius: 5px;
  cursor: pointer;
`;

const StResetImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

function Dashboard() {
  const pokemonList = useContext(PokemonContext).pokemonList;
  const removePokemonHendler = useContext(PokemonContext).removePokemonHendler;
  const removeAllPokemon = useContext(PokemonContext).removeAllPokemon;

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
            return <PokeballCell key={Math.random()} />;
          }
        })}
      </StCellWrapper>
      <StResetBtn onClick={removeAllPokemon}>
        <StResetImg src={RestartImg} alt=""/>
      </StResetBtn>
    </StyledDashboard>
  );
}

export default Dashboard;
