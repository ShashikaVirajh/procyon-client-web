import { CustomError } from 'types/error.types';

export type StatsState = {
  data: {
    applicationCount: ApplicationCount | null;
    monthlyApplications: MonthlyApplication[];
  };
  ui: {
    fetchStatList: {
      isLoading: boolean;
      errorMessage: CustomError | null;
      successMessage: CustomError | null;
    };
  };
};

export type ApplicationCount = {
  declined: number;
  interview: number;
  pending: number;
};

export type MonthlyApplication = {
  month: string;
  count: number;
};
