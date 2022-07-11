import { ForkEffect, PutEffect } from 'redux-saga/effects';

import { ResetJobStateAction } from 'store/job/types/job-action.types';
import { ResetStatsStateAction } from 'store/stats/types/stats-action.types';
import { SignOutRequestAction } from 'store/user/types/user-action.types';
import { ResetCommonStateAction } from './common-action.types';

export type ResetApplicationStateSaga = Generator<
  | PutEffect<ResetJobStateAction>
  | PutEffect<ResetCommonStateAction>
  | PutEffect<ResetStatsStateAction>
  | PutEffect<SignOutRequestAction>
>;

export type CommonSagas = Generator<ForkEffect<never>>;
