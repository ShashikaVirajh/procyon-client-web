import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeJobPage } from 'store/job/job.actions';

// import { ChevronDoubleLeft, ChevronDoubleRight } from 'assets/icons';

import { selectPagination } from 'store/job/job.selector';
import { Button } from 'components/layouts';
import { ChangeJobPagePayload } from 'types/payload.types';

import Wrapper from './pagination.styles';
import PaginatinButtonContainer from './pagination-button-container';

const Pagination: FC = () => {
  const dispatch = useDispatch();

  const pagination = useSelector(selectPagination);

  const handleNextPage = (): void => {
    const nextPage =
      pagination?.currentPage === pagination?.totalPages ? 1 : pagination?.currentPage + 1;
    const payload: ChangeJobPagePayload = { currentPage: nextPage };

    dispatch(changeJobPage(payload));
  };

  const handlePrevPage = (): void => {
    const prevPage =
      pagination?.currentPage - 1 === 0 ? pagination?.totalPages : pagination?.currentPage - 1;
    const payload: ChangeJobPagePayload = { currentPage: prevPage };

    dispatch(changeJobPage(payload));
  };

  const handlePageClick = (pageNumber: number): void => {
    const payload: ChangeJobPagePayload = { currentPage: pageNumber };
    dispatch(changeJobPage(payload));
  };

  const renderPagination = (): JSX.Element | null => {
    if (pagination?.totalPages > 1) {
      return (
        <Wrapper>
          <Button type='button' text='PREV' className='prev-btn' onClick={handlePrevPage} />

          <PaginatinButtonContainer
            totalPages={pagination?.totalPages}
            currentPage={pagination?.currentPage}
            onPageClick={(pageNumber: number): void => handlePageClick(pageNumber)}
          />

          <Button type='button' text='NEXT' className='next-btn' onClick={handleNextPage} />
        </Wrapper>
      );
    }

    return null;
  };

  return renderPagination();
};

export default Pagination;
