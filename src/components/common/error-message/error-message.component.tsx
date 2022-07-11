import { FC } from 'react';

import { Header } from 'components/elements';

const Error: FC = () => {
  return (
    <div className='section section-center text-center'>
      <Header level={2} text='An error occured' />
    </div>
  );
};

export default Error;
