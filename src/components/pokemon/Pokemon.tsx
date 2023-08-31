// import { usePokemon } from '../../utils/fetcher';
// import { PokemonSkeleton } from "./PokemonSkeleton"
// import { PokemonContainer } from "./styled"

import { usePokemon } from '../../utils';

type PokemonProps = {
  name: string
}
export const Pokemon = ({ name }: PokemonProps) => {
  const { data, error, isLoading } = usePokemon(name);

  if (isLoading || error || !data) return <div>Skeleton</div>;
  const { dream_world: dw, 'official-artwork': oa } = data.sprites.other ?? {};
  return (
    <div>
      <img
        alt={''}
        src={dw?.front_default ?? oa?.front_default ?? undefined}
      ></img>
      <div>name: {data.name}</div>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      <div>order: {data.order}</div>
      <div>base xp: {data.base_experience}</div>
    </div>
  );
};
