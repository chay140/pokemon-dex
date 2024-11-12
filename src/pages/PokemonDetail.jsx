import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../assets/MOCK_DATA";
import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { toast } from "react-toastify";
import TYPE_COLOR_DATA from "../assets/TYPE_COLOR_DATA";

// 디테일 페이지
const StDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

// 이미지 및 앞뒤 버튼 wrapper
const StPokemonImgWrapper = styled.div`
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 포켓몬 이미지 스타일링
const StPokemonImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

// 이름 서식
const StPokemonName = styled.h1`
  font-size: 40px;
  /* color: #565bed; */
  color: black;
  font-weight: 900;
`;

// 타입(들) Wrapper
const StPokemonTypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// 타입 박스
const StPokemonType = styled.div`
  background-color: ${(props) => props.$bg_color};
  font-size: 24px;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  border: 5px solid ${(props) => props.$border_color};
`;

// 디테일 wrapper
const StPokemonDetail = styled.p`
  font-size: 24px;
`;

// 기능 버튼 wrapper
const StBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

// 기본 버튼
const StButton = styled.button`
  padding: 10px 20px;
  font-size: 22px;
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

// 앞뒤 버튼
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

  // 포켓몬 정보 불러오기
  const targetPokemon = MOCK_DATA.find(function (pokemon) {
    return pokemon.id === Number(params.id);
  });

  // 디테일 페이지에서 추가 클릭시, 알림 띄우기!
  const addButtonHandler = () => {
    if (addPokemonHandler(targetPokemon)) {
      toast.success("포켓몬이 추가되었습니다!");
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

      <StPokemonTypeWrapper>
        {targetPokemon.types.map((type) => {
          const type_obj = TYPE_COLOR_DATA.find(function (t) {
            return type === t.type;
          });
          return (
            <StPokemonType
              key={type_obj.id}
              $bg_color={type_obj.bg_color}
              $border_color={type_obj.border_color}
            >
              {type}
            </StPokemonType>
          );
        })}
      </StPokemonTypeWrapper>

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
