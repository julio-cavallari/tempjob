import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, List } from './styles';

import JobApplicationButton from './JobApplicationButton';

function JobApplications({jobs}) {
  const navigation = useNavigation();
  return (
    <Container>
      <List
        data={jobs}
        renderItem={({ item }) => (
          <JobApplicationButton
            onPress={() => navigation.navigate('JobDescription', {jobId: item.job_opportunity_id, applied: true, jobAId: item.id})}
            source={{
              uri: item.company_logo
            }}
          />
        )}
        keyExtractor={item => `job_application_${item.id.toString()}`}
        initialNumToRender={12}
        removeClippedSubviews={true}
        windowSize={12}
        removeClippedSubviews={false}
        horizontal
      />
    </Container>

  );
}

export default JobApplications;


