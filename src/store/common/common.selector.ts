import { createSelector } from 'reselect';

import { RootState } from 'store/store';
import { CommonState } from './common-store.types';

const selectCommonState = (state: RootState): CommonState => state.common;

export const selectIsSideBarOpen = createSelector(
  [selectCommonState],
  (common) => common.data?.isSideBarOpen,
);
