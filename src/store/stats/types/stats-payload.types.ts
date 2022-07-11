import { ApplicationCount, MonthlyApplication } from 'store/stats/types/stats-state.types';

export type FetchStatsSuccessPayload = {
  applicationCount: ApplicationCount;
  monthlyApplications: MonthlyApplication[];
};
