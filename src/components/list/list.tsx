import { FC } from 'react';

import { PokeNamedType } from '../../types';

import { Card, CardList } from './styled';

interface IList {
  data: PokeNamedType[];
}

export const List: FC<IList> = ({ data }) => (
  <CardList>
    {data.map(el => <Card key={el.name}>{el.name}</Card>)}
  </CardList>
);
