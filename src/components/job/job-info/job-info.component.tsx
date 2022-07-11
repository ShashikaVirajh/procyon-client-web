import { FC } from 'react';

import Wrapper from './job-info.styles';

const JobInfo: FC<JobInfoProps> = ({ icon, text }): JSX.Element => (
  <Wrapper>
    <span className='icon'>{icon}</span>
    <span className='text'>{text}</span>
  </Wrapper>
);

type JobInfoProps = {
  icon: JSX.Element;
  text: string;
};

export default JobInfo;
