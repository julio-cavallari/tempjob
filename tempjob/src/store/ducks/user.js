import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  authenticate: ["user", "token"],
  authenticateFetching: [],
  authenticationRequest: ["email", "password"],
  userUpdateRequest: ["data"],
  userUpdateAvatarRequest: ["avatar"],
  userUpdate: ["user"],
  userUpdateAvatar: ["user"],
  setNewToken: ["user", "token"],
  isAuthenticated: [],
  isLoaded: [],
  setErrors: ["errors"],
  userLogout: [],
  userLogoutRequest: [],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  token: null,
  isAuthenticated: false,
  authenticateFetching: false,
  user: null,
  isLoaded: false,
  errors: [],
};

const authenticate = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    user: action.user,
    token: action.token
  }
};

const authenticateFetching = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    authenticateFetching: !state.authenticateFetching,
  }
};

const isAuthenticated = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    isAuthenticated: true
  }
};

const setNewToken = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    user: action.user,
    token: action.token
  }
};

const isLoaded = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    isLoaded: true
  }
};

const setErrors = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    errors: action.errors
  }
};

const update = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    user: action.user,
    errors: []
  }
};

const logout = (state = INITIAL_STATE, action) => {
  return state = {
    token: null,
    isAuthenticated: false,
    user: null,
    isLoaded: false,
    errors: [],
  }
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.AUTHENTICATE]: authenticate,
  [Types.AUTHENTICATE_FETCHING]: authenticateFetching,
  [Types.IS_AUTHENTICATED]: isAuthenticated,
  [Types.SET_NEW_TOKEN]: setNewToken,
  [Types.IS_LOADED]: isLoaded,
  [Types.SET_ERRORS]: setErrors,
  [Types.USER_UPDATE]: update,
  [Types.USER_UPDATE_AVATAR]: update,
  [Types.USER_LOGOUT]: logout,
});
