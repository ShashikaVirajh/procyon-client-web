import { ForkEffect, PutEffect } from 'redux-saga/effects';

import { Action } from 'types/redux.types';
import { ResetJobStateAction } from 'store/job/job-store.types';
import { ResetStatsStateAction } from 'store/stats/stats-store.types';
import { SignOutRequestAction } from 'store/user/user-store.types';

/** COMMON ACTION TYPE CONSTANTS */
export enum COMMON_ACTION_TYPES {
  TOGGLE_SIDE_BAR = 'COMMON/TOGGLE_SIDE_BAR',
  RESET_COMMON_STATE = 'COMMON/RESET_COMMON_STATE',
  RESET_APPLICATION_STATE = 'COMMON/RESET_APPLICATION_STATE',
}

/** COMMON ACTION TYPES */
export type ToggleSideBarAction = Action<COMMON_ACTION_TYPES.TOGGLE_SIDE_BAR>;
export type ResetCommonStateAction = Action<COMMON_ACTION_TYPES.RESET_COMMON_STATE>;
export type ResetApplicationStateAction = Action<COMMON_ACTION_TYPES.RESET_APPLICATION_STATE>;

/** COMMON SAGA TYPES */
export type ResetApplicationStateSaga = Generator<
  | PutEffect<ResetJobStateAction>
  | PutEffect<ResetCommonStateAction>
  | PutEffect<ResetStatsStateAction>
  | PutEffect<SignOutRequestAction>
>;

export type CommonSagas = Generator<ForkEffect<never>>;

/** COMMON STATE TYPES */
export type CommonState = {
  data: {
    isSideBarOpen: boolean;
  };
};
