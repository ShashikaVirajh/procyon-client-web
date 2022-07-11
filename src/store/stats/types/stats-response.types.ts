export type FetchStatsResponse = {
  defaultStats: ApplicationCountInResponse;
  monthlyApplications: MonthlyApplicationInResponse[];
};

type ApplicationCountInResponse = {
  declined: number;
  interview: number;
  pending: number;
};

type MonthlyApplicationInResponse = {
  date: string;
  count: number;
};
