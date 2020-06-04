import { call, put } from 'redux-saga/effects';
import {Creators as JobApplicationActions} from '../ducks/jobApplication';

export function* jobApplication(api, action) {
  yield put(JobApplicationActions.jobApplicationToggleFetching());
  try {
    const response = yield call(api, 'post', `job_application/${action.job_opportunity_id}`);

    if (response.status === 201) {
      yield put(JobApplicationActions.jobApplicationClearErrors());
      yield put(JobApplicationActions.jobApplication(response.data.job_application, response.data.message));
      yield put(JobApplicationActions.jobApplicationOpenModal());
    }
  } catch (error) {
    yield put(JobApplicationActions.jobApplicationSetErrors(error.response?.data.errors));
    yield put(JobApplicationActions.jobApplicationOpenModal());

  }
  yield put(JobApplicationActions.jobApplicationToggleFetching());
}

export function* getJobApplications(api) {
  const response = yield call(api, 'get', 'job_application');

  if (response.data.jobApplications.length) {
    yield put(JobApplicationActions.getJobApplications(response.data.jobApplications));
  }
}


export function* saveDocument(api, action) {
  const formData = {
    'document_id': action.documentId,
    'job_opportunity_id': action.jobOpportunityId,
    'document': action.picture
  }
  const response = yield call(api, 'post', 'document/job_application', formData);

  if (response.data.documents.length) {
    yield put(JobApplicationActions.jobApplicationSaveDocument(response.data.documents));
  }
}

export function* getDocuments(api) {
  try {
    const response = yield call(api, 'get', 'document/job_application');

    if (response.data.documents.length) {
      yield put(JobApplicationActions.jobApplicationGetDocuments(response.data.documents));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* cancelApplication(api, action) {
  try {
    const response = yield call(api, 'delete', `job_application/${action.jobApplicationId}`);

    yield put(JobApplicationActions.jobApplicationSetMessage(response.data.message));
    yield put(JobApplicationActions.getJobApplications(response.data.jobApplications));
  } catch (error) {
    yield put(JobApplicationActions.jobApplicationSetErrors(error.response?.data.errors));
    yield put(JobApplicationActions.jobApplicationOpenModal());
  }
}
