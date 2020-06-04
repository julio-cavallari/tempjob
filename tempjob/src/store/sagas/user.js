import { call, put } from 'redux-saga/effects';
import {Creators as UserActions} from '../ducks/user';

export function* authenticateUser(api, action) {
  yield put(UserActions.authenticateFetching());
  try {
    const response = yield call(api, 'post', 'login', {email: action.email, password: action.password});

    if (response.data.user && response.data.token) {
      yield put(UserActions.authenticate(response.data.user, response.data.token));
    }
  } catch (error) {
    yield put(UserActions.setErrors(error.response?.data?.errors));
  }
  yield put(UserActions.authenticateFetching());
}

export function* updateUser(api, action) {
  try {
    const response = yield call(api, 'post', `update/user/${action?.data?.id}`, action.data);

    if (response.data.user) {
      yield put(UserActions.userUpdate(response.data.user));
    }
  } catch (error) {
    yield put(UserActions.setErrors(error.response?.data?.errors));
  }
}

export function* updateUserAvatar(api, action) {
  try {
    const response = yield call(api, 'post', `user/avatar`, {avatar: action.avatar});

    if (response.data.user) {
      yield put(UserActions.userUpdateAvatar(response.data.user));
    }
  } catch (error) {
    yield put(UserActions.setErrors(error.response?.data?.errors));
  }
}

export function* logout(api) {
  try {
    yield call(api, 'post', 'logout');
    yield put(UserActions.userLogout());
  } catch (error) {
    yield put(UserActions.setErrors(error.response?.data?.errors));
  }
}


