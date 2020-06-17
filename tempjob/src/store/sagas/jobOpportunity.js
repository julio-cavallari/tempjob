import {call, put} from 'redux-saga/effects';
import {Creators as JobOpportunityActions} from '../ducks/jobOpportunity';

export function* getJobOpportunities(api) {
  yield put(JobOpportunityActions.jobOpportunityToggleFetching(true));
  const response = yield call(api, 'get', 'job_opportunity');

  if (response.data.jobOpportunities.length) {
    yield put(
      JobOpportunityActions.getJobOpportunities(response.data.jobOpportunities),
    );
  }

  yield put(JobOpportunityActions.jobOpportunityToggleFetching(false));
}

export function* getJobOpportunity(api, action) {
  yield put(JobOpportunityActions.jobOpportunityToggleFetching(true));

  const response = yield call(api, 'get', `job_opportunity/${action.id}`);

  if (response.data.jobOpportunity) {
    yield put(
      JobOpportunityActions.getJobOpportunity(response.data.jobOpportunity),
    );
  }

  yield put(JobOpportunityActions.jobOpportunityToggleFetching(false));
}
