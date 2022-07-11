import { AnyAction } from 'redux';

import { CommonState } from './types/common-state.types';

import { resetCommonState, toggleSideBar } from './common.actions';

const COMMON_INITIAL_STATE: CommonState = {
  data: {
    isSideBarOpen: true,
  },
};

export const commonReducer = (state = COMMON_INITIAL_STATE, action: AnyAction): CommonState => {
  if (toggleSideBar.match(action)) return handleToggleSideBar(state);

  if (resetCommonState.match(action)) return handleResetCommonState();

  return state;
};

const handleToggleSideBar = (state: CommonState): CommonState => ({
  ...state,
  data: {
    ...state.data,
    isSideBarOpen: !state.data?.isSideBarOpen,
  },
});

const handleResetCommonState = (): CommonState => ({
  ...COMMON_INITIAL_STATE,
});
