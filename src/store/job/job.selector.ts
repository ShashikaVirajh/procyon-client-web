import { createSelector } from 'reselect';

import { RootState } from 'store/store';
import { JobState } from './job-store.types';

const selectJobState = (state: RootState): JobState => state.job;

export const selectDetailedJob = createSelector([selectJobState], (job) => job.data?.detailedJob);

export const selectJobList = createSelector([selectJobState], (job) => job.data?.jobList);

export const selectPagination = createSelector([selectJobState], (job) => job.data?.pagination);

export const selectJobFilters = createSelector([selectJobState], (job) => job.data?.filters);
