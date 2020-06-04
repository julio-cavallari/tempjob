import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';

function Header(props) {
  return (
    <Appbar.Header>
        {props.goBack && <Appbar.BackAction
            onPress={goBack}
        />}
        <Appbar.Content
            titleStyle={props.titleStyle}
            title={props.title}
        />
        <Appbar.Action icon="menu" onPress={() => {}} />
    </Appbar.Header>
  );
}

Header.propTypes = {
  goBack: PropTypes.func,
  titleStyle: Text.propTypes.style,
  title: PropTypes.node,
  actions: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  })
};

Header.defaultProps = {
  goBack: null,
  titleStyle: null,
  title: "",
  actions: null
};

export default Header;
