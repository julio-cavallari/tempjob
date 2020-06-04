import React from 'react';
import { Avatar, TouchableRipple } from 'react-native-paper';
import PropTypes from 'prop-types';

import { Container } from './styles';

function JobApplicationButton({onPress, source}){
  return (
    <Container
      onPress={onPress}
    >
      <Avatar.Image size={64} source={source} />
    </Container>
  );
}

JobApplicationButton.propTypes = {
  source: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default JobApplicationButton;
