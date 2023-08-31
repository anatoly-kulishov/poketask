import { FC } from 'react';

import { PokeNamedType } from '../../types';
import { Link } from 'react-router-dom';

interface IList {
  data: PokeNamedType[];
}

export const List: FC<IList> = ({ data }) => (
  <ul>
    {data.map(el => <li key={el.name}><Link to={el.name}>{el.name}</Link></li>)}
  </ul>
);
