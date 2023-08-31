import { setupCache } from 'axios-cache-interceptor';
import { Ability, NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import axios from 'axios';
import useSWR from 'swr';

export const baseInstance = setupCache(
  axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
      'Content-Type': 'application/json'
    }
  })
);

// const pokemonClient = new PokemonClient();

baseInstance.interceptors.request.use();

const fetcher =
  <T>() =>
    (url: string) =>
      baseInstance.get<T>(url).then((res) => res.data);

const useList = (resource: string, offset = 0, limit = 20) =>
  useSWR(
    `${resource}?offset=${offset}&limit=${limit}`,
    fetcher<NamedAPIResourceList>()
  );

const usePokemonList = (offset?: number, limit?: number) =>
  useList('/pokemon', offset, limit);

const usePokemon = (name: string) =>
  useSWR(`/pokemon/${name}`, fetcher<Pokemon>());

const useAbility = (name: string) =>
  useSWR(`/ability/${name}`, fetcher<Ability>());

const useAbilityList = (offset = 0, limit = 2000) =>
  useList("/ability", offset, limit);


export default fetcher;

export {
  usePokemonList,
  usePokemon,
  useAbility,
  useAbilityList
};
