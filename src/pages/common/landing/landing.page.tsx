import { ROUTES } from 'constants/routes.constants';
import { FC } from 'react';

import { AppLogo, CustomImage, Header, Paragraph, RouterLink } from 'components/layouts';
import MainImg from 'assets/images/main.svg';

import Wrapper from './landing.styles';

const SCREEN_DESCRIPTION =
  'Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.';

const LandingPage: FC = () => {
  return (
    <Wrapper>
      <nav>
        <AppLogo />
      </nav>

      <div className='container page'>
        <div className='info'>
          <Header text='Track Your Jobs' />

          <Paragraph content={SCREEN_DESCRIPTION} />

          <RouterLink route={ROUTES.REGISTER} text='Log In / Register' className='btn btn-hero' />
        </div>

        <CustomImage source={MainImg} alt='Job Hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
