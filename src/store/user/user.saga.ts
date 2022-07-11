import { call, put, takeLeading } from 'typed-redux-saga/macro';

import {
  normalizeSignInResponse,
  normalizeSignUpResponse,
  normalizeUpdateUserResponse,
} from 'normalizers/user.normalizer';
import { isUnauthorizedUser, setErrorMessage } from 'utils/error.utils';

import {
  SignInRequestAction,
  SignUpRequestAction,
  UpdateProfileRequestAction,
} from './types/user-action.types';
import {
  signInFailed,
  signInSuccess,
  signOutRequest,
  signUpFailed,
  signUpSuccess,
  updateProfileFailed,
  updateProfileSuccess,
} from './user.actions';

import { UserService } from './user.service';
import { USER_ACTION_TYPES } from './types/user-action.types';
import { SignInSaga, SignUpSaga, UpdateProfileSaga, UserSagas } from './types/user-saga.types';

function* signInSaga({ payload }: SignInRequestAction): SignInSaga {
  try {
    const data = yield* call(UserService.signIn, payload);
    const signInSuccessPayload = normalizeSignInResponse(data);

    yield* put(signInSuccess(signInSuccessPayload));
  } catch (error) {
    const customError = setErrorMessage(error);
    yield* put(signInFailed(customError));
  }
}

function* signUpSaga({ payload }: SignUpRequestAction): SignUpSaga {
  try {
    const data = yield* call(UserService.signUp, payload);
    const signUpSuccessPayload = normalizeSignUpResponse(data);

    yield* put(signUpSuccess(signUpSuccessPayload));
  } catch (error) {
    const errorMessage = setErrorMessage(error);
    yield* put(signUpFailed(errorMessage));
  }
}

function* updateProfileSaga({ payload }: UpdateProfileRequestAction): UpdateProfileSaga {
  try {
    const data = yield* call(UserService.updateProfile, payload);
    const updateProfileSuccessPayload = normalizeUpdateUserResponse(data);

    yield* put(updateProfileSuccess(updateProfileSuccessPayload));
  } catch (error) {
    if (isUnauthorizedUser(error)) {
      return yield* put(signOutRequest());
    }

    const errorMessage = setErrorMessage(error);
    yield* put(updateProfileFailed(errorMessage));
  }
}

export function* userSagas(): UserSagas {
  yield* takeLeading(USER_ACTION_TYPES.SIGN_IN_REQUEST, signInSaga);
  yield* takeLeading(USER_ACTION_TYPES.SIGN_UP_REQUEST, signUpSaga);
  yield* takeLeading(USER_ACTION_TYPES.UPDATE_PROFILE_REQUEST, updateProfileSaga);
}
