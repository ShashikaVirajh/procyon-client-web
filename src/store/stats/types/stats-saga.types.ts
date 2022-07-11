import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';
import { FetchStatsFailedAction, FetchStatsSuccessAction } from './stats-action.types';
import { FetchStatsResponse } from './stats-response.types';

export type FetchStatsSaga = Generator<
  | CallEffect<FetchStatsResponse>
  | PutEffect<FetchStatsSuccessAction>
  | PutEffect<FetchStatsFailedAction>
>;

export type StatsSagas = Generator<ForkEffect<never>>;
