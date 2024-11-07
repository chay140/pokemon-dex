import styled from "styled-components";
import Pokeball from "../assets/pokeball.png"

function Dashboard() {
	const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(240, 240, 240);
    border: 1px solid rgb(221, 221, 221);
    margin-bottom: 20px;
    border-radius: 10px;
  `;

  const StCellWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    width: 100%;
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

  return (
    <StyledDashboard>
      <h3>나만의 포케몬</h3>
      <StCellWrapper>
        <StImgWrapper>
          <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon"/>
        </StImgWrapper>
        <StImgWrapper>
          <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon"/>
        </StImgWrapper>
        <StImgWrapper>
          <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon"/>
        </StImgWrapper>
        <StImgWrapper>
          <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon"/>
        </StImgWrapper>
        <StImgWrapper>
          <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon"/>
        </StImgWrapper>
        <StImgWrapper>
          <StPokeballImg src={Pokeball} alt="Pokeball 8bit icon"/>
        </StImgWrapper>
      </StCellWrapper>
    </StyledDashboard>
  );
}

export default Dashboard;
