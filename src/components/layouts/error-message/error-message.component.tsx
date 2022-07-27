import { FC } from 'react';

import { Header } from 'components/layouts';

const Error: FC<ErrorProps> = ({ text, level }) => (
  <div className='section section-center text-center'>
    <Header level={level} text={text} />
  </div>
);

type ErrorProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

Error.defaultProps = {
  text: 'An error occured',
  level: 2,
};

export default Error;
