import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { BigSideBar, NavBar, SmallSideBar } from 'components/layouts';

import Wrapper from './dashboard-layout.styles';

const DashboardLayoutPage: FC = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSideBar />

        <div>
          <NavBar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default DashboardLayoutPage;
