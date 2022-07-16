import { FC } from 'react';

// import { CustomImage, Header, Paragraph, RouterLink } from 'components/elements';
import { CustomImage, Header, Paragraph } from 'components/elements';

import NotFoundImg from 'assets/images/not-found.svg';

import { Wrapper } from './error.styles';

const ErrorPage: FC = () => (
  <Wrapper className='full-page'>
    <div>
      <CustomImage source={NotFoundImg} alt='Not Found Image' />

      <Header level={3} text='Page Not Found!' />

      <Paragraph content='Sorry we cannot seem to find the page you are looking for' />

      {/* <RouterLink route='/' text='Back Home' /> */}
    </div>
  </Wrapper>
);

export default ErrorPage;
