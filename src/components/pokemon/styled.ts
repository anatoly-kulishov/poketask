import styled from "@emotion/styled";

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0 0 15px;
  list-style: none;
`;

export const Card = styled.li`
  display: flex;
  padding: 10px;
`;
