import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';
import {Creators as JobApplicationsActions} from '../../../store/ducks/jobApplication';
import {Title} from 'react-native-paper';
import {Container, TitleContainer} from './styles';
import JobCard from './JobCard';

const jobApplicationsSelector = createSelector(
  (state) => state.jobApplication,
  (jobApplication) => jobApplication,
);

function AvailableJobs({navigation}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(12);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const {jobApplications, fetching} = useSelector(jobApplicationsSelector);
  const dispatch = useDispatch();
  const getAllJobsApplications = useCallback(
    () => dispatch(JobApplicationsActions.getJobApplicationsRequest()),
    [dispatch],
  );
  const paginate = useCallback(() => {
    const start = (page - 1) * rowsPerPage;
    let end = page * rowsPerPage;
    if (start < jobApplications.length && end > jobApplications.length) {
      end = jobApplications.length;
    } else if (start > jobApplications.length) {
      return false;
    }
    setVisibleJobs([...visibleJobs, ...jobApplications.slice(start, end)]);
  }, [jobApplications, page, rowsPerPage, visibleJobs]);

  const onRefresh = () => {
    getAllJobsApplications();
    setVisibleJobs([]);
    setPage(1);
  };
  useFocusEffect(
    React.useCallback(() => {
      getAllJobsApplications();
    }, [getAllJobsApplications]),
  );
  const ListHeader = () => (
    <TitleContainer>
      <Title>Candidaturas em Andamento</Title>
    </TitleContainer>
  );
  useEffect(() => {
    paginate();
  }, [page, jobApplications, paginate]);
  return (
    <Container>
      <FlatList
        data={visibleJobs}
        renderItem={({item}) => (
          <JobCard
            data={item}
            onButtonPress={() =>
              navigation.navigate('JobDescription', {
                jobId: item.job_opportunity_id,
                applied: true,
              })
            }
          />
        )}
        keyExtractor={(item) => `job_application_${item.id.toString()}`}
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
