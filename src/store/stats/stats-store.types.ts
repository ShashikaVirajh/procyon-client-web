import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

import { CustomError } from 'types/error.types';
import { FetchStatsSuccessPayload } from 'types/payload.types';
import { Action, ActionWithPayload } from 'types/redux.types';
import { FetchStatsResponse } from 'types/response.types';

/** STATS ACTION TYPE CONSTANTS */
export enum STAT_ACTION_TYPES {
  FETCH_STATS_REQUEST = 'STATS/FETCH_STATS_REQUEST',
  FETCH_STATS_SUCCESS = 'STATS/FETCH_STATS_SUCCESS',
  FETCH_STATS_FAILED = 'STATS/FETCH_STATS_FAILED',
  RESET_STATS_STATE = 'STATS/RESET_STATS_STATE',
}

/** STATS ACTION TYPES */
export type FetchStatsRequestAction = Action<STAT_ACTION_TYPES.FETCH_STATS_REQUEST>;
export type FetchStatsSuccessAction = ActionWithPayload<
  STAT_ACTION_TYPES.FETCH_STATS_SUCCESS,
  FetchStatsSuccessPayload
>;
export type FetchStatsFailedAction = ActionWithPayload<
  STAT_ACTION_TYPES.FETCH_STATS_FAILED,
  CustomError
>;

export type ResetStatsStateAction = Action<STAT_ACTION_TYPES.RESET_STATS_STATE>;

/** STATS SAGA TYPES */
export type FetchStatsSaga = Generator<
  | CallEffect<FetchStatsResponse>
  | PutEffect<FetchStatsSuccessAction>
  | PutEffect<FetchStatsFailedAction>
>;

export type StatsSagas = Generator<ForkEffect<never>>;

/** STATS STATE TYPES */
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
