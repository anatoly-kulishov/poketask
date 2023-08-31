export interface IPokeResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeNamedType[];
}

export type PokeNamedType = {
  name: string;
  url: string;
}
