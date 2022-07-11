import { FetchStatsSuccessPayload } from 'store/stats/types/stats-payload.types';
import { FetchStatsResponse } from 'store/stats/types/stats-response.types';
import { MonthlyApplication } from 'store/stats/types/stats-state.types';

export const normalizeFetchStatsResponse = (data: FetchStatsResponse): FetchStatsSuccessPayload => {
  const applications = data?.monthlyApplications.map((application): MonthlyApplication => {
    return {
      month: application?.date,
      count: application?.count,
    };
  });

  return {
    applicationCount: data?.defaultStats,
    monthlyApplications: applications,
  };
};
