import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  toggleDarkMode: [],
  toggleTabBar: [],
  toggleSwipe: [],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  darkMode: false,
  swipeEnabled: true,
  tabBarIsVisible: true
};

const toggleDarkMode = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    darkMode: !state.darkMode
  }
};

const toggleTabBar = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    tabBarIsVisible: !state.tabBarIsVisible
  }
};

const toggleSwipe = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    swipeEnabled: !state.swipeEnabled
  }
};


/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_DARK_MODE]: toggleDarkMode,
  [Types.TOGGLE_TAB_BAR]: toggleTabBar,
  [Types.TOGGLE_SWIPE]: toggleSwipe,
});
