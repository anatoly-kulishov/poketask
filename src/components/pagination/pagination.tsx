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

  const pages: number[] = Array.from({ length: pageCount }, (_, index) => index + 1);

  const hasNext = useMemo(() => current < pageCount - 1, [current, pageCount]);
  const hasPrevious = useMemo(() => current > 0, [current]);

  return (
    <>
      <ControlWrapper>
        <ControlBtn disabled={!hasPrevious} onClick={onPrevious}>
          {'<'}
        </ControlBtn>
        <span>{current + 1} of {pageCount}</span>
        <ControlBtn disabled={!hasNext} onClick={onNext}>
          {'>'}
        </ControlBtn>
      </ControlWrapper>
      {pages.map((page) => {
        const isActive = page === current + 1;

        return (
          <PageBtn key={page} disabled={isActive} isActive={isActive} onClick={() => onTogglePage(page)}>
            {page}
          </PageBtn>
        );
      })}
    </>
  );
};
