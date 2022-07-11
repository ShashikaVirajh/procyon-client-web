import { put, takeLeading } from 'typed-redux-saga/macro';

import { resetJobState } from 'store/job/job.actions';
import { resetStatsState } from 'store/stats/stats.actions';
import { signOutRequest } from 'store/user/user.actions';
import { resetCommonState } from './common.actions';

import { COMMON_ACTION_TYPES } from './types/common-action.types';
import { CommonSagas, ResetApplicationStateSaga } from './types/common-saga.types';

function* resetApplicationStateSaga(): ResetApplicationStateSaga {
  yield* put(resetCommonState());
  yield* put(resetJobState());
  yield* put(resetStatsState());
  yield* put(signOutRequest());
}

export function* commonSagas(): CommonSagas {
  yield* takeLeading(COMMON_ACTION_TYPES.RESET_APPLICATION_STATE, resetApplicationStateSaga);
}
