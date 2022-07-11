import { createSelector } from 'reselect';

import { RootState } from 'store/store';
import { StatsState } from './types/stats-state.types';

const selectStatsState = (state: RootState): StatsState => state.stats;

export const selectApplicationCount = createSelector(
  [selectStatsState],
  (stats) => stats.data?.applicationCount,
);

export const selectMonthlyApplications = createSelector(
  [selectStatsState],
  (stats) => stats.data?.monthlyApplications,
);
