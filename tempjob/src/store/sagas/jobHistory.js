import { call, put } from 'redux-saga/effects';
import {Creators as JobHistoryActions} from '../ducks/jobHistory';

export function* getJobHistories(api) {
  const response = yield call(api, 'get', 'job_history');

  if (response.data.jobHistories.length) {
    yield put(JobHistoryActions.getJobHistories(response.data.jobHistories));
  }
}
