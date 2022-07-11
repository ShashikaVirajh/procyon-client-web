import { AnyAction } from 'redux';

import { StatsState } from 'store/stats/types/stats-state.types';

import {
  fetchStatsFailed,
  fetchStatsRequest,
  fetchStatsSuccess,
  resetStatsState,
} from './stats.actions';

const STATS_INITIAL_STATE: StatsState = {
  data: {
    applicationCount: null,
    monthlyApplications: [],
  },
  ui: {
    fetchStatList: {
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    },
  },
};

export const statsReducer = (state = STATS_INITIAL_STATE, action: AnyAction): StatsState => {
  if (fetchStatsRequest.match(action)) return handleFetchStatsRequest(state);

  if (fetchStatsSuccess.match(action)) return handleFetchStatsSuccess(state, action);

  if (fetchStatsFailed.match(action)) return handleFetchStatsFailed(state, action);

  if (resetStatsState.match(action)) return handleResetStatsState();

  return state;
};

const handleFetchStatsRequest = (state: StatsState): StatsState => ({
  ...state,
  ui: {
    ...state.ui,
    fetchStatList: {
      ...state.ui.fetchStatList,
      isLoading: true,
    },
  },
});

const handleFetchStatsSuccess = (state: StatsState, action: AnyAction): StatsState => ({
  ...state,
  data: {
    ...state.data,
    ...action.payload,
  },
  ui: STATS_INITIAL_STATE.ui,
});

const handleFetchStatsFailed = (state: StatsState, action: AnyAction): StatsState => ({
  ...state,
  data: STATS_INITIAL_STATE.data,
  ui: {
    ...STATS_INITIAL_STATE.ui,
    fetchStatList: {
      ...state.ui.fetchStatList,
      isLoading: false,
      errorMessage: action.payload,
    },
  },
});

const handleResetStatsState = (): StatsState => ({
  ...STATS_INITIAL_STATE,
});
