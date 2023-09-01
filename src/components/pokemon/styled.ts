import styled from "@emotion/styled";

export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .5rem;
`;

export const PokemonContainer = styled.div`
  background-color: lightgray;
  border-radius: 2rem;
  min-width: 7.5rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content:center;
  gap: .5rem;

  & > img {
    width: 7rem;
    height: 7rem;
  }
`
