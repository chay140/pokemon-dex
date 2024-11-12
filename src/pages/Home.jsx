import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StyledStartButton = styled.button`
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


function Home() {
  const navigate = useNavigate();
  
  return (
    <StyledHome>
      <h1>Pokemon Dex</h1>
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
