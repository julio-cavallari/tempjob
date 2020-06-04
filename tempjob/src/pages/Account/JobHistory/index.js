import React,{ useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect'
import {Creators as JobHistoriesActions} from '../../../store/ducks/jobHistory';
import { Title } from 'react-native-paper';
import { Container, TitleContainer } from './styles';
import JobCard from './JobCard';


const jobHistoriesSelector = createSelector(
  state => state.jobHistory,
  jobHistory => jobHistory
)

function JobHistory({navigation}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const {jobHistories, fetching} = useSelector(jobHistoriesSelector);
  const dispatch = useDispatch();
  const getAllJobsHistories = () => dispatch(JobHistoriesActions.getJobHistoriesRequest());
  const paginate = () => {
    const start = (page - 1) * rowsPerPage;
    let end = page * rowsPerPage;
    if(start < jobHistories.length && end > jobHistories.length){
      end = jobHistories.length;
    }
    else if(start > jobHistories.length){
      return false;
    }
    setVisibleJobs([...visibleJobs, ...jobHistories.slice(start, end)]);
  }
  const onRefresh = () => {
    getAllJobsHistories();
    setVisibleJobs([]);
    setPage(1);
  }
  useFocusEffect(
    React.useCallback(() => {
      getAllJobsHistories();
    }, [])
  );
  const ListHeader = () => (
    <TitleContainer>
      <Title>Histórico</Title>
    </TitleContainer>
  );
  useEffect(() => paginate(), [page]);
  return (
  <Container>
    <FlatList
      data={visibleJobs}
      renderItem={({ item }) => (
        <JobCard
          data={item}
        />
      )}
      keyExtractor={item => `job_application_${item.id.toString()}`}
      ListHeaderComponent={<ListHeader />}
      initialNumToRender={12}
      removeClippedSubviews={true}
      windowSize={12}
      onRefresh={onRefresh}
      refreshing={fetching}
      removeClippedSubviews={false}
      onEndReached={() => setPage(page + 1)}
      onEndReachedThreshold={0.5}
    />
  </Container>);
}

export default JobHistory;


