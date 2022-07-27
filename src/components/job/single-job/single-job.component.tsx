import { useDispatch } from 'react-redux';
import { FC, memo } from 'react';

import { Briefcase, Calender, LocationArrow } from 'assets/icons';
import { Button, Header, Text } from 'components/layouts';
import { JobInfo } from 'components/job';
import { formatDate } from 'utils/date.utils';
import { DeleteJobRequestPayload } from 'types/payload.types';
import { deleteJobRequest } from 'store/job/job.actions';

import Wrapper from './single.job.styles';
const SingleJob: FC<SingleJobProps> = memo(
  ({ jobId, position, company, jobLocation, jobType, createdAt, jobStatus }) => {
    const dispatch = useDispatch();

    const handleDeleteJob = (): void => {
      const payload: DeleteJobRequestPayload = { jobId };
      dispatch(deleteJobRequest(payload));
    };

    const createdDate = formatDate(new Date(createdAt), 'dd-MMM-yyyy');

    return (
      <Wrapper>
        <header>
          <div className='main-icon'>{company.charAt(0)}</div>

          <div className='info'>
            <Header level={5} text={position} />
            <Text label={company} />
          </div>
        </header>

        <div className='content'>
          <div className='content-center'>
            <JobInfo icon={<LocationArrow />} text={jobLocation} />
            <JobInfo icon={<Calender />} text={createdDate} />
            <JobInfo icon={<Briefcase />} text={jobType} />
            <div className={`status ${jobStatus}`}>{jobStatus}</div>
          </div>

          <footer>
            <div className='actions'>
              <Button
                type='button'
                text='DELETE'
                className='btn delete-btn'
                onClick={handleDeleteJob}
              />
            </div>
          </footer>
        </div>
      </Wrapper>
    );
  },
);

type SingleJobProps = {
  jobId: string;
  position: string;
  company: string;
  jobLocation: string;
  jobType: string;
  createdAt: string;
  jobStatus: string;
};

export default SingleJob;
