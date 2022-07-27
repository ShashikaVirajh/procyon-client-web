import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchJobListRequest } from 'store/job/job.actions';
import { Header, Pagination, Spinner } from 'components/layouts';
import { RootState } from 'store/store';
import { DetailedJob } from 'store/job/job-store.types';
import { SingleJob } from 'components/job';
import { selectJobFilters, selectJobList, selectPagination } from 'store/job/job.selector';

import Wrapper from './jobs-container.styles';

const JobsContainer: FC = () => {
  const dispatch = useDispatch();

  const jobList = useSelector(selectJobList);
  const { currentPage, totalJobs } = useSelector(selectPagination);
  const { search, jobStatus, jobType, sort } = useSelector(selectJobFilters);
  const isFetchingJobList = useSelector((state: RootState) => state.job.ui.fetchJobList.isLoading);

  useEffect(() => {
    dispatch(fetchJobListRequest());
  }, [currentPage, search, jobStatus, jobType, sort, dispatch]);

  if (isFetchingJobList) return <Spinner />;

  const renderJobList = (): JSX.Element[] | JSX.Element => {
    if (jobList.length === 0) {
      return <Header level={2} text='No Jobs To Display' />;
    }

    return jobList.map((job: DetailedJob) => {
      return <SingleJob key={job.jobId} {...job} />;
    });
  };

  return (
    <Wrapper>
      <Header level={5} text={`${totalJobs}(s) jobs found`} />

      <div className='jobs'>{renderJobList()}</div>

      <Pagination />
    </Wrapper>
  );
};

export default JobsContainer;
