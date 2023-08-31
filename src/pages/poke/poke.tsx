import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const PokePage = () => {
  let { id: pokeName } = useParams();

  useEffect(() => {

  }, [])

  return (
    <div>
      {pokeName}
    </div>
  );
};
