import { AnyAction } from 'redux';

import { UserState } from './user-store.types';

import {
  signInFailed,
  signInRequest,
  signInSuccess,
  signOutRequest,
  signUpFailed,
  signUpRequest,
  signUpSuccess,
  updateProfileFailed,
  updateProfileRequest,
  updateProfileSuccess,
} from './user.actions';

const USER_INITIAL_STATE: UserState = {
  data: {
    tokens: null,
    currentUser: null,
    isAuthenticated: false,
  },
  ui: {
    signIn: {
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    },
    signUp: {
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    },
    updateProfile: {
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    },
  },
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {
  if (signInRequest.match(action)) return handleSignInRequest(state);

  if (signInSuccess.match(action)) return handleSignInSuccess(state, action);

  if (signInFailed.match(action)) return handleSignInFailed(state, action);

  if (signUpRequest.match(action)) return handleSignUpRequest(state);

  if (signUpSuccess.match(action)) return handleSignUpSuccess(state, action);

  if (signUpFailed.match(action)) handleSignUpFailed(state, action);

  if (updateProfileRequest.match(action)) return handleUpdateProfileRequest(state);

  if (updateProfileSuccess.match(action)) return handleUpdateProfileSuccess(state, action);

  if (updateProfileFailed.match(action)) handleUpdateProfileFailed(state, action);

  if (signOutRequest.match(action)) return handleSignOutRequest();

  return state;
};

const handleSignInRequest = (state: UserState): UserState => ({
  ...state,
  ui: {
    ...state.ui,
    signIn: {
      ...state.ui.signIn,
      isLoading: true,
    },
  },
});

const handleSignInSuccess = (state: UserState, action: AnyAction): UserState => ({
  ...state,
  data: action.payload,
  ui: USER_INITIAL_STATE.ui,
});

const handleSignInFailed = (state: UserState, action: AnyAction): UserState => ({
  ...state,
  data: USER_INITIAL_STATE.data,
  ui: {
    ...USER_INITIAL_STATE.ui,
    signIn: {
      ...state.ui.signIn,
      isLoading: false,
      errorMessage: action.payload,
    },
  },
});

const handleSignUpRequest = (state: UserState): UserState => ({
  ...state,
  ui: {
    ...state.ui,
    signUp: {
      ...state.ui.signUp,
      isLoading: true,
    },
  },
});

const handleSignUpSuccess = (state: UserState, action: AnyAction): UserState => ({
  ...state,
  data: action.payload,
  ui: USER_INITIAL_STATE.ui,
});

const handleSignUpFailed = (state: UserState, action: AnyAction): UserState => ({
  ...state,
  data: USER_INITIAL_STATE.data,
  ui: {
    ...USER_INITIAL_STATE.ui,
    signUp: {
      ...state.ui.signUp,
      isLoading: false,
      errorMessage: action.payload,
    },
  },
});

const handleUpdateProfileRequest = (state: UserState): UserState => ({
  ...state,
  ui: {
    ...state.ui,
    updateProfile: {
      ...state.ui.updateProfile,
      isLoading: true,
    },
  },
});

const handleUpdateProfileSuccess = (state: UserState, action: AnyAction): UserState => ({
  ...state,
  data: {
    ...state.data,
    ...action.payload,
  },
  ui: USER_INITIAL_STATE.ui,
});

const handleUpdateProfileFailed = (state: UserState, action: AnyAction): UserState => ({
  ...state,
  data: {
    ...state.data,
  },
  ui: {
    ...state.ui,
    updateProfile: {
      ...state.ui.updateProfile,
      isLoading: false,
      errorMessage: action.payload,
    },
  },
});

const handleSignOutRequest = (): UserState => ({
  ...USER_INITIAL_STATE,
});
