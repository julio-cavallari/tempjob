import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  jobApplicationRequest: ["job_opportunity_id"],
  jobApplication: ["jobApplication", "message"],
  getJobApplicationsRequest: [],
  getJobApplications: ["jobApplications"],
  jobApplicationSetMessage: ["message"],
  jobApplicationSetErrors: ["errors"],
  jobApplicationClearErrors: [],
  jobApplicationDismissModal: [],
  jobApplicationOpenModal: [],
  jobApplicationToggleFetching: [],
  jobApplicationToggleFetched: [],
  jobApplicationToggleCamera: [],
  jobApplicationGetDocumentData: ["documentId"],
  jobApplicationSetDocumentName: ["documentName"],
  jobApplicationSaveDocument: ["documents"],
  jobApplicationGetDocuments: ["documents"],
  jobApplicationSaveDocumentRequest: ["documentId", "jobOpportunityId", "picture"],
  jobApplicationGetDocumentsRequest: [],
  jobApplicationRemoveDocument: ["pictureId"],
  jobApplicationToggleDocumentMessageDialog: [],
  jobApplicationCancelApplicationRequest: ["jobApplicationId"],
  jobApplicationCancelApplication: ["jobApplications"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  jobApplications: [],
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
  [Types.GET_JOB_APPLICATIONS]: getJobApplications,
  [Types.JOB_APPLICATION]: getJobApplication,
  [Types.JOB_APPLICATION_SET_MESSAGE]: setMessage,
  [Types.JOB_APPLICATION_SET_ERRORS]: setErrors,
  [Types.JOB_APPLICATION_CLEAR_ERRORS]: clearErrors,
  [Types.JOB_APPLICATION_DISMISS_MODAL]: dismissModal,
  [Types.JOB_APPLICATION_OPEN_MODAL]: openModal,
  [Types.JOB_APPLICATION_TOGGLE_FETCHING]: toggleFetching,
  [Types.JOB_APPLICATION_TOGGLE_FETCHED]: toggleFetched,
  [Types.JOB_APPLICATION_TOGGLE_CAMERA]: toggleCamera,
  [Types.JOB_APPLICATION_GET_DOCUMENT_DATA]: getDocumentData,
  [Types.JOB_APPLICATION_SET_DOCUMENT_NAME]: setDocumentName,
  [Types.JOB_APPLICATION_SAVE_DOCUMENT]: saveDocument,
  [Types.JOB_APPLICATION_GET_DOCUMENTS]: getDocuments,
  [Types.JOB_APPLICATION_REMOVE_DOCUMENT]: removeDocument,
  [Types.JOB_APPLICATION_TOGGLE_DOCUMENT_MESSAGE_DIALOG]: toggleDocumentMessageDialog,
  [Types.JOB_APPLICATION_CANCEL_APPLICATION]: getJobApplications,
});
