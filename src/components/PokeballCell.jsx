import styled from "styled-components";
import Pokeball from "../assets/pokeball_8bit.png";
import React from "react";

const StImgWrapper = styled.div`
  margin: 0px 25px;
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 6px double rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  border-radius: 10px;
`;

const StPokeballImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

function PokeballCell() {
  // 콘솔 확인하기
//   console.log("pokeballcell rendered");
  return (
    <StImgWrapper>
      <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon" />
    </StImgWrapper>
  );
}

export default React.memo(PokeballCell);
