import { CustomImage } from 'components/layouts';
import AppLogoImg from 'assets/images/app-logo.svg';

const AppLogo = (): JSX.Element => {
  return <CustomImage source={AppLogoImg} alt='Procyon Logo' className='logo' />;
};

export default AppLogo;
