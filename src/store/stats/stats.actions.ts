import { CustomError } from 'types/error.types';
import { FetchStatsSuccessPayload } from 'types/payload.types';
import { createAction, withMatcher } from 'utils/redux.utils';
import {
  FetchStatsFailedAction,
  FetchStatsRequestAction,
  FetchStatsSuccessAction,
  ResetStatsStateAction,
  STAT_ACTION_TYPES,
} from './stats-store.types';

export const fetchStatsRequest = withMatcher(
  (): FetchStatsRequestAction => createAction(STAT_ACTION_TYPES.FETCH_STATS_REQUEST),
);

export const fetchStatsSuccess = withMatcher(
  (payload: FetchStatsSuccessPayload): FetchStatsSuccessAction =>
    createAction(STAT_ACTION_TYPES.FETCH_STATS_SUCCESS, payload),
);

export const fetchStatsFailed = withMatcher(
  (payload: CustomError): FetchStatsFailedAction =>
    createAction(STAT_ACTION_TYPES.FETCH_STATS_FAILED, payload),
);

export const resetStatsState = withMatcher(
  (): ResetStatsStateAction => createAction(STAT_ACTION_TYPES.RESET_STATS_STATE),
);
