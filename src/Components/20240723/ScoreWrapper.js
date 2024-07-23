import styled from "styled-components";
import { Score } from "./Score";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ScoreWrapper() {
  const score = {
    math: 100,
    english: 75,
    history: 80,
  };

  return (
    <>
      <Container>
        <Score firstName="Steve" score={score} />
      </Container>
    </>
  );
}
