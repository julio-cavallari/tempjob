import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  jobOpportunitiesRequest: [],
  getJobOpportunities: ["jobOpportunities"],
  jobOpportunityRequest: ["id"],
  getJobOpportunity: ["jobOpportunity"],
  wipeJobOpportunity: [],
  jobOpportunityDismissModal: [],
  jobOpportunityOpenModal: [],
  jobOpportunityToggleFetching: ["fetching"],
  jobOpportunityToggleFetched: [],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  jobOpportunities: [],
  jobOpportunity: null,
  message: null,
  modal: false,
  fetching: false,
  fetched: false,
  errors: null,
};


const getJobOpportunities = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    jobOpportunities: action.jobOpportunities
  }
};

const getJobOpportunity = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    jobOpportunity: action.jobOpportunity
  }
};

const wipeJobOpportunity = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    jobOpportunity: null
  }
};


const dismissModal = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    modal: false,
  }
};

const openModal = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    modal: true,
  }
};

const toggleFetching = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    fetching: action.fetching
  }
}

const toggleFetched = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    fetched: !state.fetched
  }
}


/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.GET_JOB_OPPORTUNITIES]: getJobOpportunities,
  [Types.GET_JOB_OPPORTUNITY]: getJobOpportunity,
  [Types.WIPE_JOB_OPPORTUNITY]: wipeJobOpportunity,
  [Types.JOB_OPPORTUNITY_DISMISS_MODAL]: dismissModal,
  [Types.JOB_OPPORTUNITY_OPEN_MODAL]: openModal,
  [Types.JOB_OPPORTUNITY_TOGGLE_FETCHING]: toggleFetching,
  [Types.JOB_OPPORTUNITY_TOGGLE_FETCHED]: toggleFetched,
});
