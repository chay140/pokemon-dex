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

const StPokemonImgWrapper = styled.div`
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StPokemonImg = styled.img`
  height: 100%;
  object-fit: cover;
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

const StArrowBtn = styled.button`
  padding: 15px 20px;
  font-size: 40px;
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
  const notify = useContext(PokemonContext).notify;

  // 포켓몬 정보 불러오기
  const targetPokemon = MOCK_DATA.find(function (pokemon) {
    return pokemon.id === Number(params.id);
  });

  // 타입 설명
  const types_str = targetPokemon.types.join(", ");

  // 디테일 페이지에서 추가 클릭시, 알림 띄우기!
  const addButtonHandler = () => {
    if (addPokemonHandler(targetPokemon)) {
      notify("포켓몬이 추가되었습니다!");
    }
  };

  // 앞/뒤 번호 이동
  const toPrevPokemonHandler = () => {
    if (targetPokemon.id > 1) {
      navigate(`/pokemon-details/${Number(targetPokemon.id) - 1}`);
    } else {
      navigate(`/pokemon-details/151`);
    }
  };

  const toNextPokemonHandler = () => {
    if (targetPokemon.id < 151) {
      navigate(`/pokemon-details/${Number(targetPokemon.id) + 1}`);
    } else {
      navigate(`/pokemon-details/1`);
    }
  };

  return (
    <StDetailContainer>
      <StPokemonImgWrapper>
        <StArrowBtn onClick={toPrevPokemonHandler}>{`<`}</StArrowBtn>
        <StPokemonImg
          src={targetPokemon.img_url}
          alt={targetPokemon.korean_name}
        />
        <StArrowBtn onClick={toNextPokemonHandler}>{`>`}</StArrowBtn>
      </StPokemonImgWrapper>
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
        <StButton onClick={addButtonHandler}>추가</StButton>
      </StBtnContainer>
    </StDetailContainer>
  );
}

export default PokemonDetail;
