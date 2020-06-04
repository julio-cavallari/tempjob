import { takeLatest, all } from 'redux-saga/effects';
import { Api } from '../../services';

import { Types as JobOpportunityTypes } from '../ducks/jobOpportunity';
import { Types as JobApplicationTypes } from '../ducks/jobApplication';
import { Types as JobHistoryTypes } from '../ducks/jobHistory';
import { Types as UserTypes } from '../ducks/user';

import { getJobOpportunities, getJobOpportunity } from './jobOpportunity';
import { jobApplication, getJobApplications, saveDocument, getDocuments, cancelApplication } from './jobApplication';
import { getJobHistories } from './jobHistory';
import { authenticateUser, updateUser, updateUserAvatar, logout } from './user';

export default function* root() {
  yield all([
    //Job Opportunity Actions
    takeLatest(JobOpportunityTypes.JOB_OPPORTUNITIES_REQUEST, getJobOpportunities, Api),
    takeLatest(JobOpportunityTypes.JOB_OPPORTUNITY_REQUEST, getJobOpportunity, Api),

    //Job Application Actions
    takeLatest(JobApplicationTypes.JOB_APPLICATION_REQUEST, jobApplication, Api),
    takeLatest(JobApplicationTypes.GET_JOB_APPLICATIONS_REQUEST, getJobApplications, Api),
    takeLatest(JobApplicationTypes.JOB_APPLICATION_SAVE_DOCUMENT_REQUEST, saveDocument, Api),
    takeLatest(JobApplicationTypes.JOB_APPLICATION_GET_DOCUMENTS_REQUEST, getDocuments, Api),
    takeLatest(JobApplicationTypes.JOB_APPLICATION_CANCEL_APPLICATION_REQUEST, cancelApplication, Api),


    //Job History Actions
    takeLatest(JobHistoryTypes.GET_JOB_HISTORIES_REQUEST, getJobHistories, Api),

    //Auth Actions
    takeLatest(UserTypes.AUTHENTICATION_REQUEST, authenticateUser, Api),
    takeLatest(UserTypes.USER_UPDATE_REQUEST, updateUser, Api),
    takeLatest(UserTypes.USER_UPDATE_AVATAR_REQUEST, updateUserAvatar, Api),
    takeLatest(UserTypes.USER_LOGOUT_REQUEST, logout, Api),
  ]);
}
