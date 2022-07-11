import { ROUTES } from 'constants/routes.constants';
import { BarChartSharp, Forms, Profile, QueryStatus } from 'assets/icons';

export const LINK_ITEMS: TLinkItem[] = [
  { id: 1, text: 'Stats', path: ROUTES.DASHBOARD, icon: <BarChartSharp /> },
  { id: 2, text: 'Job List', path: ROUTES.JOB_LIST, icon: <QueryStatus /> },
  { id: 3, text: 'Create Job', path: ROUTES.CREATE_JOB, icon: <Forms /> },
  { id: 4, text: 'Profile', path: ROUTES.PROFILE, icon: <Profile /> },
];

export type TLinkItem = {
  id: number;
  text: string;
  path: string;
  icon: JSX.Element;
};
