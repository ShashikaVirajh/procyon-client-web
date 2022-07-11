import { FC } from 'react';
import { useSelector } from 'react-redux';

import { AppLogo } from 'components/common';
import { selectIsSideBarOpen } from 'store/common/common.selector';
import { NavigationLinks } from 'components/common';

import Wrapper from './big-side-bar.styles';

const BigSidebar: FC = () => {
  const isSidebarOpen = useSelector(selectIsSideBarOpen);

  const classNames = isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container ';

  return (
    <Wrapper>
      <div className={classNames}>
        <div className='content'>
          <header>
            <AppLogo />
          </header>

          <NavigationLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
