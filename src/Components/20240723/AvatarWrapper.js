import { Avatar } from "./Avatar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const persons = [
  { name: "Steve", job: "Programmer", country: "대한민국" },
  { name: "Tom", job: "Student", country: "USA" },
  { name: "Adrian", job: "Engineer", country: "France" },
  { name: "Max", job: "Painter", country: "Germany" },
];

const colors = ["lightgreen", "teel", "lightgrey", "khaki"];

export function AvatarWrapper() {
  return (
    <>
      <Container>
        {persons.map((p, i) => (
          <Avatar person={p} bgcolor={colors[i]} />
        ))}
      </Container>
    </>
  );
}
