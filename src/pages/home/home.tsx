import { FilteredPokemonList } from '../../components/pokemon';
import { PokemonList } from '../../templates/pokemon-list';
import { Pagination } from '../../components/pagination';
import { Filter } from '../../components/filter';

import { useAppDispatch, useAppSelector } from '../../store';

import { HomeContainer, PageTitle } from './styled';

export const HomePage = () => {
  const pagination = useAppSelector(state => state.pagination);
  const filter = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();

  return (
    <>
      <HomeContainer>
        <PageTitle>Покемоны</PageTitle>
        <Filter />
        {filter.abilities.length ? (
          <FilteredPokemonList />
        ) : (
          <>
            <PokemonList />
            <div style={{ display: 'none' }}>
              <PokemonList index={pagination.index + 1} />
            </div>
          </>
        )}
        <Pagination />
      </HomeContainer>
    </>
  );
};
