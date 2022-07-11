import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import { userSagas } from './user/user.saga';
import { jobSagas } from './job/job.saga';
import { statsSagas } from './stats/stats.saga';
import { commonSagas } from './common/common.saga';

export function* rootSaga(): RootSaga {
  yield all([userSagas(), jobSagas(), statsSagas(), commonSagas()]);
}

type RootSaga = Generator<AllEffect<Generator<ForkEffect<never>>>>;
