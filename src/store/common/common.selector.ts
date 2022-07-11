import { createSelector } from 'reselect';

import { RootState } from 'store/store';
import { CommonState } from './types/common-state.types';

const selectCommonState = (state: RootState): CommonState => state.common;

export const selectIsSideBarOpen = createSelector(
  [selectCommonState],
  (common) => common.data?.isSideBarOpen,
);
