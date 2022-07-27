import { FetchStatsSuccessPayload } from 'types/payload.types';
import { FetchStatsResponse } from 'types/response.types';
import { MonthlyApplication } from 'store/stats/stats-store.types';

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
