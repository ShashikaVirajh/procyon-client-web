import { FC } from 'react';

import { Button } from 'components/layouts';
import { createArrayFromNumber } from 'utils/numbers.utils';

const PaginationButtonContainer: FC<PaginationButtonContainerProps> = ({
  totalPages,
  currentPage,
  onPageClick,
}) => {
  const pageNumbers = createArrayFromNumber(totalPages);

  return (
    <div className='btn-container'>
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          type='button'
          text={pageNumber.toString()}
          className={pageNumber === currentPage ? 'pageBtn active' : 'pageBtn'}
          onClick={(): void => onPageClick(pageNumber)}
        />
      ))}
    </div>
  );
};

type PaginationButtonContainerProps = {
  totalPages: number;
  currentPage: number;
  onPageClick: (pageNumber: number) => void;
};

export default PaginationButtonContainer;
