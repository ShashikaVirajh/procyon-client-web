import { createSelector } from 'reselect';

import { RootState } from 'store/store';
import { UserState } from './user-store.types';

const selectUserState = (state: RootState): UserState => state.user;

export const selectTokens = createSelector([selectUserState], (user) => user.data?.tokens);

export const selectCurrentUser = createSelector(
  [selectUserState],
  (user) => user.data?.currentUser,
);

export const selectIsAuthenticated = createSelector(
  [selectUserState],
  (user) => user.data?.isAuthenticated,
);
