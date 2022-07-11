import { CustomError } from 'types/error.types';
import { FetchStatsSuccessPayload } from 'store/stats/types/stats-payload.types';
import { Action, ActionWithPayload } from 'types/redux.types';

export enum STAT_ACTION_TYPES {
  FETCH_STATS_REQUEST = 'STATS/FETCH_STATS_REQUEST',
  FETCH_STATS_SUCCESS = 'STATS/FETCH_STATS_SUCCESS',
  FETCH_STATS_FAILED = 'STATS/FETCH_STATS_FAILED',
  RESET_STATS_STATE = 'STATS/RESET_STATS_STATE',
}

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
