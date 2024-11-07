import styled from "styled-components";

function PokemonCard({ img_url, korean_name, id }) {
  const StCard = styled.div`
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

  const StPokemonImg = styled.img`
    width: 100px;
    height: 100px;
  `;

  const StTextWrapper = styled.div`
    margin: 10px;
  `;

  const StPokemonName = styled.p`
    color: black;
    font-weight: bold;
    margin: 5px 10px;
  `;

  const StPokemonNum = styled.p`
    color: rgb(102, 102, 102);
  `;

  const StPokemonAddButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
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

  const str_id = id.toString().padStart(3, "0");

  return (
    <StCard>
      <StPokemonImg src={img_url} />
      <StTextWrapper>
        <StPokemonName>{korean_name}</StPokemonName>
        <StPokemonNum>{`No.${str_id}`}</StPokemonNum>
      </StTextWrapper>
      <StPokemonAddButton onClick={() => console.log(id, "clicked")}>
        추가
      </StPokemonAddButton>
    </StCard>
  );
}

export default PokemonCard;
