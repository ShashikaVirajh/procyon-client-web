import { COLORS } from 'constants/colors.constants';
import { Bug, CalenderCheck, SuitcaseRolling } from 'assets/icons';
import { ApplicationCount } from 'store/stats/types/stats-state.types';

export const APPLICATION_COUNT_LIST = (applicationCount?: ApplicationCount): StatItem[] => [
  {
    title: 'pending applications',
    count: (applicationCount && applicationCount?.pending) || 0,
    icon: <SuitcaseRolling />,
    color: COLORS.DARK_YELLOW,
    backgroundColor: COLORS.LIGHT_YELLOW,
  },
  {
    title: 'interviews scheduled',
    count: (applicationCount && applicationCount?.interview) || 0,
    icon: <CalenderCheck />,
    color: COLORS.DARK_BLUE,
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  {
    title: 'jobs declined',
    count: (applicationCount && applicationCount?.declined) || 0,
    icon: <Bug />,
    color: COLORS.DARK_RED,
    backgroundColor: COLORS.LIGHT_RED,
  },
];

export type StatItem = {
  title: string;
  count: number;
  icon: JSX.Element;
  color: string;
  backgroundColor: string;
};
