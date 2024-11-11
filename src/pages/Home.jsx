import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();

	const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `;

  const StTitle = styled.h1`
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
  `;

	const StyledStartButton = styled.button`
    padding: 20px 30px;
    font-size: 32px;
    cursor: pointer;
    border-radius: 10px;
    background-color: cornflowerblue;
    color: white;
    border: none;
    transition: background-color 0.3s ease;
    &:hover {
      background: #565bed;
      color: white;
    }
  `;

  
  return (
    <StyledHome>
      <StTitle>Pokemon Dex</StTitle>
      <StyledStartButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </StyledStartButton>
    </StyledHome>
  );
}

export default Home;
