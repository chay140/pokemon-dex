import styled from "styled-components";
import Pokeball from "../assets/pokeball.png";
import PokemonCard from "./PokemonCard";

const StyledDashboard = styled.div`
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

function EmptyCell() {
  return (
    <StImgWrapper>
      <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon" />
    </StImgWrapper>
  );
}

function Dashboard({ pokemonList }) {
  const emptyCell = Array(6 - pokemonList.length).fill({});

  console.log("emptyCell", emptyCell);

  return (
    <StyledDashboard>
      <h3>나만의 포케몬</h3>
      <StCellWrapper>
        {[...pokemonList, ...emptyCell].map((pokemon) => {
          if (Object.keys(pokemon).length > 0) {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          } else {
            return <EmptyCell key={Math.random()} />;
          }
        })}
      </StCellWrapper>
    </StyledDashboard>
  );
}

export default Dashboard;
