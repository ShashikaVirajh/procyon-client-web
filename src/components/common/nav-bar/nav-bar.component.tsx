import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from 'components/elements';
import { AlignLeft, CaretDown, UserCircle } from 'assets/icons';
import { selectCurrentUser } from 'store/user/user.selector';
import { resetApplicationState, toggleSideBar } from 'store/common/common.actions';

import AppLogo from '../app-logo/logo.component';
import Wrapper from './nav-bar.styles';

const NavBar: FC = () => {
  const dispatch = useDispatch();

  const [showLogout, setShowLogout] = useState(false);

  const currentUser = useSelector(selectCurrentUser);

  const handleSideBarToggle = (): void => {
    dispatch(toggleSideBar());
  };

  const handleSignOut = (): void => {
    dispatch(resetApplicationState());
  };

  const handleSetLogout = (): void => {
    setShowLogout(!showLogout);
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <Icon icon={<AlignLeft />} onClick={handleSideBarToggle} />

        <div>
          <AppLogo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>

        <div className='btn-container'>
          <button type='button' className='btn' onClick={handleSetLogout}>
            <UserCircle />
            {currentUser?.userName}
            <CaretDown />
          </button>

          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={handleSignOut}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavBar;
