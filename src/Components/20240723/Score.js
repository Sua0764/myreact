import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h1`
  text-align: center;
`;

const Bold = styled.p`
  font-weight: 700;
  text-align: center;
`;

const ScoreBox = styled.div`
  width: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  padding: 10px;
`;

export function Score({ firstName, score: { math, english, history } }) {
  return (
    <>
      <Container>
        <Name>{firstName}</Name>
        <ScoreBox>
          <Bold>Math</Bold>
          <p>{math}</p>
          <Bold>English</Bold>
          <p>{english}</p>
          <Bold>History</Bold>
          <p>{history}</p>
        </ScoreBox>
      </Container>
    </>
  );
}
