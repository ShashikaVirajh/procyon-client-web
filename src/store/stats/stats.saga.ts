import { call, put, takeLeading } from 'typed-redux-saga/macro';

import { setErrorMessage } from 'utils/error.utils';
import { normalizeFetchStatsResponse } from 'normalizers/stats.normalizer';

import { StatsService } from './stats.service';
import { FetchStatsSaga, STAT_ACTION_TYPES, StatsSagas } from './stats-store.types';
import { fetchStatsFailed, fetchStatsSuccess } from './stats.actions';

function* fetchStatsSaga(): FetchStatsSaga {
  try {
    const data = yield* call(StatsService.fetchStats);
    const fetchStatsSuccessPayload = normalizeFetchStatsResponse(data);

    yield* put(fetchStatsSuccess(fetchStatsSuccessPayload));
  } catch (error) {
    const customError = setErrorMessage(error);
    yield* put(fetchStatsFailed(customError));
  }
}

export function* statsSagas(): StatsSagas {
  yield* takeLeading(STAT_ACTION_TYPES.FETCH_STATS_REQUEST, fetchStatsSaga);
}
