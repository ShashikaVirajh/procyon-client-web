import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppLogo } from 'components/common';
import { selectIsSideBarOpen } from 'store/common/common.selector';
import { toggleSideBar } from 'store/common/common.actions';
import { Times } from 'assets/icons';
import { NavigationLinks } from 'components/common';

import Wrapper from './small-side-bar.styles';

const SmallSidebar: FC = () => {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(selectIsSideBarOpen);

  const handleSideBarToggle = (): void => {
    dispatch(toggleSideBar());
  };

  const classNames = isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container';

  return (
    <Wrapper>
      <div className={classNames}>
        <div className='content'>
          <button className='close-btn' onClick={handleSideBarToggle}>
            <Times />
          </button>

          <header>
            <AppLogo />
          </header>

          <NavigationLinks onClick={handleSideBarToggle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
