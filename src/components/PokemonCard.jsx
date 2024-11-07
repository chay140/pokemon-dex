import styled from "styled-components";

function PokemonCard() {
  const temp_data = [
    {
      img_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      korean_name: "뮤",
      types: ["에스퍼"],
      id: 151,
      description:
        "에스퍼 타입의 전설의 포켓몬으로, 희귀하고 신비로운 능력을 가집니다.",
    },
  ];

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
	
  return (
    <StCard>
      <StPokemonImg src={`${temp_data[0].img_url}`} />
      <StTextWrapper>
        <StPokemonName>{`${temp_data[0].korean_name}`}</StPokemonName>
        <StPokemonNum>{`No.${temp_data[0].id}`}</StPokemonNum>
			</StTextWrapper>
			<StPokemonAddButton>추가</StPokemonAddButton>
    </StCard>
  );
}

export default PokemonCard;
