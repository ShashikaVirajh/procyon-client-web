import { FC } from 'react';

import { JobFilter, JobsContainer } from 'components/job';

const JobListPage: FC = () => (
  <>
    <JobFilter />
    <JobsContainer />
  </>
);

export default JobListPage;
