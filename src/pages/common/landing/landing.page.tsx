import { FC } from 'react';

import { CustomImage, Header, Paragraph, RouterLink } from 'components/elements';

import MainImg from 'assets/images/main.svg';

import { AppLogo } from 'components/common';
import Wrapper from './landing.styles';

const LandingPage: FC = () => {
  return (
    <Wrapper>
      <nav>
        <AppLogo />
      </nav>

      <div className='container page'>
        <div className='info'>
          <Header text={STRINGS.SCREEN_TITLE} />

          <Paragraph content={STRINGS.SCREEN_DESCRIPTION} />

          {/* <RouterLink route='/register' text='Log In / Register' className='btn btn-hero' /> */}
        </div>

        <CustomImage source={MainImg} alt='Job Hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

const STRINGS = {
  SCREEN_TITLE: 'Track Your Jobs',
  SCREEN_DESCRIPTION:
    'Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.',
  LOGIN_BUTTON_TEXT: 'LOGIN',
};

export default LandingPage;
