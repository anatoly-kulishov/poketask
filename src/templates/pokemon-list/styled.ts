import styled from "@emotion/styled";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: .5rem;
`;

export const PokemonContainer = styled.div`
    background-color: lightgray;
    border-radius: 2rem;
    width: 7.5rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    align-items: center;
    justify-content:center;
    gap: .5rem;

    & > img {
        width: 7rem;
        height: 7rem;
    }
`
