import { PokemonSkeleton } from './PokemonSkeleton';
import { usePokemon } from '../../utils';

import { PokemonContainer } from './styled';

type PokemonProps = {
  name: string
}
export const Pokemon = ({ name }: PokemonProps) => {
  const { data, error, isLoading } = usePokemon(name);

  if (isLoading || error || !data) return <PokemonSkeleton />;

  const { dream_world: dw, 'official-artwork': oa } = data.sprites.other ?? {};

  return (
    <PokemonContainer>
      <img src={dw?.front_default ?? oa?.front_default ?? undefined} alt="" />
        <div>name: {data.name}</div>
        <div>height: {data.height}</div>
        <div>weight: {data.weight}</div>
        <div>order: {data.order}</div>
        <div>base xp: {data.base_experience}</div>
    </PokemonContainer>
);
};
