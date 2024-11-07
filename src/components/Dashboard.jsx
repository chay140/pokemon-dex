import styled from "styled-components";

function Dashboard() {
	const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(248, 248, 248);
    margin-bottom: 20px;
    border-radius: 10px;
  `;

  return (
    <StyledDashboard>
      <h3>나만의 포케몬</h3>
    </StyledDashboard>
  );
}

export default Dashboard;
