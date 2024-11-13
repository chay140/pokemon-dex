import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 카드 전체 div
const StCard = styled.div`
  justify-self: center;
  width: 140px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-7px);
    box-shadow: rgba(0, 0, 0, 0.6) 0px 8px 16px;
  }
`;

// 이미지 너비/길이
const StImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 텍스트 상자
const StTextWrapper = styled.div`
  margin: 10px;
`;

// 포켓몬 이름 스타일링
const StPokemonName = styled.p`
  color: black;
  font-weight: bold;
  margin: 5px 10px;
`;

// 포켓몬 도감 번호
const StPokemonNum = styled.p`
  color: rgb(102, 102, 102);
`;

// 추가 버튼
const StPokemonAddButton = styled.button`
  width: 40%;
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: cornflowerblue;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  &:hover {
    background: #565bed;
    color: white;
  }
`;

function PokemonCard({ pokemon, cardButtonHandler, buttonText }) {
  const str_id = pokemon.id.toString().padStart(3, "0");
  const navigate = useNavigate();

  // 디테일 페이지 넘어가기
  const handleCardClick = () => {
    navigate(`/pokemon-details/${pokemon.id}`);
  };

  // 추가/삭제 버튼 동작
  const handleButtonClick = (e) => {
    // 버튼이 눌렸을때는 디테일 페이지 X
    e.stopPropagation();
    cardButtonHandler(pokemon);
  };

  return (
    <StCard onClick={handleCardClick}>
      <StImgWrapper>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </StImgWrapper>

      <StTextWrapper>
        <StPokemonName>{pokemon.korean_name}</StPokemonName>
        <StPokemonNum>{`No.${str_id}`}</StPokemonNum>
      </StTextWrapper>
      <StPokemonAddButton onClick={handleButtonClick}>
        {buttonText}
      </StPokemonAddButton>
    </StCard>
  );
}

export default PokemonCard;
