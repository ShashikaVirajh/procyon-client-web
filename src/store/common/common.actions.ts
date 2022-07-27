import { createAction, withMatcher } from 'utils/redux.utils';
import {
  COMMON_ACTION_TYPES,
  ResetApplicationStateAction,
  ResetCommonStateAction,
  ToggleSideBarAction,
} from './common-store.types';

export const toggleSideBar = withMatcher(
  (): ToggleSideBarAction => createAction(COMMON_ACTION_TYPES.TOGGLE_SIDE_BAR),
);

export const resetCommonState = withMatcher(
  (): ResetCommonStateAction => createAction(COMMON_ACTION_TYPES.RESET_COMMON_STATE),
);

export const resetApplicationState = withMatcher(
  (): ResetApplicationStateAction => createAction(COMMON_ACTION_TYPES.RESET_APPLICATION_STATE),
);
