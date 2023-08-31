import { FC, useMemo } from 'react';

import { ControlBtn, ControlWrapper, PageBtn } from './styled';

interface IPagination {
  onTogglePage: (page: number) => void,
  onPrevious: () => void,
  onNext: () => void,
  current: number,
  offset: number,
  total: number,
}

export const Pagination: FC<IPagination> = ({ current, total, offset, onPrevious, onNext, onTogglePage }) => {
  const pageCount = Math.round(total / offset);

  const hasNext = useMemo(() => current < pageCount - 1, [current, pageCount]);
  const hasPrevious = useMemo(() => current > 0, [current]);

  return (
    <div>
      <ControlWrapper>
        {current + 1}/{pageCount} Count: {total}
        <br/>
      </ControlWrapper>
      <ControlBtn disabled={!hasPrevious} onClick={onPrevious}>
        {'<'}
      </ControlBtn>
      <ControlBtn disabled={!hasNext} onClick={onNext}>
        {'>'}
      </ControlBtn>
    </div>
  );
};
