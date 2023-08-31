import { FC, useEffect, useMemo, useState } from 'react';

import { IPokeResponse } from '../../types';
import { baseInstance } from '../../utils';
import { List } from '../../components/list';
import { Pagination } from '../../components/pagination';

const STEP = 20;

export const PokemonList: FC = () => {
  const [pokeData, setPokeData] = useState<IPokeResponse | null>(null);
  const [current, setCurrent] = useState(0);

  const total = useMemo(() => pokeData?.count ? pokeData.count: 0, [pokeData?.count]);

  const handleChangePage = async (url: string) => {
    try {
      const { status, data } = await baseInstance.get<IPokeResponse>(url);

      if (status === 200 && data) {
        setPokeData(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleNext = () => {
    setCurrent((cur) => cur + 1);

    if (pokeData?.next) {
      handleChangePage(pokeData.next);
    }
  };

  const handlePrevious = () => {
    setCurrent((cur) => cur - 1);

    if (pokeData?.previous) {
      handleChangePage(pokeData.previous);
    }
  };

  const handleTogglePage = (page: number) => {
    handleChangePage(`https://pokeapi.co/api/v2/ability/?limit=${STEP}&offset=${(page === 1) ? '' : (page * STEP) - STEP}`)
    setCurrent(page - 1);
  }

  useEffect(() => {
    handleChangePage('https://pokeapi.co/api/v2/ability');
  }, []);

  return (
    <>
      <h2>Покемоны</h2>
      <List data={pokeData?.results || []} />
      <Pagination
        total={total}
        offset={STEP}
        current={current}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onTogglePage={handleTogglePage}
      />
    </>
  );
}
