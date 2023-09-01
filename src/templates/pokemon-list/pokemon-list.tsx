import { FC, useEffect } from 'react';

import { setCount, setInfinite } from '../../store/slices/pagination';
import { useAppDispatch, useAppSelector } from '../../store';
import { usePokemonList } from '../../utils';

import { ListContainer, PokemonContainer } from './styled';
import { Pokemon } from '../../components/pokemon';

type ListProps = {
  index?: number
}

export const PokemonList: FC<ListProps> = ({ index }) => {
  const pagination = useAppSelector(state => state.pagination);
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = usePokemonList(
    (index ?? pagination.index) * pagination.limit,
    pagination.limit
  );

  useEffect(() => {
    if (data) {
      dispatch(setCount(data.count));
      dispatch(setInfinite(false));
    }
  }, [data, dispatch]);

  if (isLoading || error || !data)
    return (
      <ListContainer>
        {new Array(pagination.limit).fill(null).map((_, i) => (
          <PokemonContainer />
        ))}
      </ListContainer>
    );

  return (
    <>
      <ListContainer>
        {data.results.map(({ name }) => (
          <Pokemon key={name} name={name}></Pokemon>
        ))}
      </ListContainer>
    </>
  );
};
