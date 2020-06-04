import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  getJobHistoriesRequest: [],
  getJobHistories: ["jobApplications"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  jobHistories: [],
  jobApplication: {},
  documents: [],
  documentMessageDialog: false,
  documentName: null,
  camera: false,
  documentData: {
    documentId: null,
  },
  message: null,
  modal: false,
  fetching: false,
  fetched: false,
  errors: null,
};

const getJobApplications = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    jobApplications: action.jobApplications
  }
};

const getJobApplication = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    jobApplication: action.jobApplication,
    message: action.message,
  }
};

const setMessage = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    message: action.message,
  }
};

const setErrors = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    errors: action.errors,
  }
};

const clearErrors = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    errors: null,
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
    fetching: !state.fetching
  }
}

const toggleFetched = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    fetched: !state.fetched
  }
}

const toggleCamera = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    camera: !state.camera,
  }
}

const getDocumentData = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    documentData: {
      ...state.documentData,
      documentId: action.documentId,
    },
  }
}

const setDocumentName = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    documentName: action.documentName,
  }
}

const saveDocument = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    documents: action.documents,
  }
}

const getDocuments = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    documents: action.documents,
  }
}

const removeDocument = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    documents: action.documents,
  }
}

const toggleDocumentMessageDialog = (state = INITIAL_STATE, action) => {
  return state = {
    ...state,
    documentMessageDialog: !state.documentMessageDialog
  }
}


/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.GET_JOB_HISTORIES]: getJobApplications,
});
