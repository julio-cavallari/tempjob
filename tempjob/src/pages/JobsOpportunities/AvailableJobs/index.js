import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';
import {Creators as JobOpportunitiesActions} from '../../../store/ducks/jobOpportunity';
import {Creators as JobApplicationsActions} from '../../../store/ducks/jobApplication';
import {Title} from 'react-native-paper';

import {Container, TitleContainer} from './styles';
import JobCard from './JobCard';
import JobApplications from './JobApplications';

const jobOpportunitiesSelector = createSelector(
  (state) => state.jobOpportunity,
  (jobOpportunity) => jobOpportunity,
);

const jobApplicationsSelector = createSelector(
  (state) => state.jobApplication,
  (jobApplication) => jobApplication.jobApplications,
);

function AvailableJobs({navigation}) {
  const {jobOpportunities, fetching} = useSelector(jobOpportunitiesSelector);
  const jobApplications = useSelector(jobApplicationsSelector);
  const dispatch = useDispatch();

  const getAllJobsOpportunities = useCallback(
    () => dispatch(JobOpportunitiesActions.jobOpportunitiesRequest()),
    [dispatch],
  );
  const getAllJobsApplications = useCallback(
    () => dispatch(JobApplicationsActions.getJobApplicationsRequest()),
    [dispatch],
  );
  const getDocuments = useCallback(
    () => dispatch(JobApplicationsActions.jobApplicationGetDocumentsRequest()),
    [dispatch],
  );

  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(12);
  const [visibleJobs, setVisibleJobs] = useState([
    ...jobOpportunities.slice(page - 1, rowsPerPage),
  ]);
  const paginate = useCallback(() => {
    const start = (page - 1) * rowsPerPage;
    let end = page * rowsPerPage;
    if (start < jobOpportunities.length && end > jobOpportunities.length) {
      end = jobOpportunities.length;
    } else if (start > jobOpportunities.length) {
      return false;
    }
    if (page === 1) {
      setVisibleJobs([...jobOpportunities.slice(start, end)]);
    } else {
      setVisibleJobs([...visibleJobs, ...jobOpportunities.slice(start, end)]);
    }
  }, [jobOpportunities, page, rowsPerPage, visibleJobs]);

  const onRefresh = () => {
    getAllJobsOpportunities();
    setVisibleJobs([]);
    setPage(1);
  };
  useFocusEffect(() => {
    getAllJobsOpportunities();
    getAllJobsApplications();
    getDocuments();
  }, [getAllJobsApplications, getAllJobsOpportunities, getDocuments]);
  const ListHeader = () => (
    <TitleContainer>
      <Title>Vagas Disponíveis</Title>
    </TitleContainer>
  );
  useEffect(() => {
    paginate();
  }, [page, jobOpportunities, paginate]);
  return (
    <Container>
      <JobApplications jobs={jobApplications} />
      <FlatList
        data={visibleJobs}
        renderItem={({item}) => (
          <JobCard
            data={item}
            onButtonPress={() =>
              navigation.navigate('JobDescription', {jobId: item.id})
            }
          />
        )}
        keyExtractor={(item) => `job_apportunity_${item.id.toString()}`}
        ListHeaderComponent={<ListHeader />}
        initialNumToRender={12}
        removeClippedSubviews={true}
        windowSize={12}
        onRefresh={onRefresh}
        refreshing={fetching}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
}

export default AvailableJobs;
