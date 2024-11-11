import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../assets/MOCK_DATA";
import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const StDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StPokemonImg = styled.img`
  width: 200px;
  height: 200px;
`;

const StPokemonName = styled.h1`
  font-size: 40px;
  color: #565bed;
  font-weight: 900;
`;

const StPokemonDetail = styled.p`
  font-size: 20px;
`;

const StBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: cornflowerblue;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
  &:hover {
    background: #565bed;
    color: white;
  }
`;

function PokemonDetail() {
	const navigate = useNavigate();
  const params = useParams();
  const addPokemonHandler = useContext(PokemonContext).addPokemonHandler;

  const targetPokemon = MOCK_DATA.find(function (pokemon) {
    return pokemon.id === Number(params.id);
  });

  console.log(targetPokemon);

  const types_str = targetPokemon.types.join(", ");

  return (
    <StDetailContainer>
      <StPokemonImg
        src={targetPokemon.img_url}
        alt={targetPokemon.korean_name}
      />
      <StPokemonName>{targetPokemon.korean_name}</StPokemonName>
      <StPokemonDetail>{`타입: ${types_str}`}</StPokemonDetail>
      <StPokemonDetail>{targetPokemon.description}</StPokemonDetail>
      <StBtnContainer>
        <StButton
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로가기
        </StButton>
        <StButton onClick={() => addPokemonHandler(targetPokemon)}>
          추가
        </StButton>
      </StBtnContainer>
    </StDetailContainer>
  );
}

export default PokemonDetail;
