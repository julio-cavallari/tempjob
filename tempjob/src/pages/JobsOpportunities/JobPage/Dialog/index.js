import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { Dialog, Paragraph, Portal, Button } from 'react-native-paper';
import PropTypes from 'prop-types';

function MessageDialog({visible, onDismiss, onOkButtonPress}){
  const jobOpportunitySelector = createSelector(
    state => state.jobApplication,
    jobApplication => jobApplication
  );

  const {message, errors} = useSelector(jobOpportunitySelector);
  return (
    <Portal>
      <Dialog
          visible={visible}
          onDismiss={onDismiss}>
        <Dialog.Content>
          <Paragraph>{!!errors ? errors : message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => {
            if(!(!!errors)){
              onOkButtonPress();
            }
            onDismiss();
          }}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

MessageDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onOkButtonPress: PropTypes.func.isRequired,
};

MessageDialog.defaultProps = {
  visible: false,
  onDismiss: () => {},
  onOkButtonPress: () => {},
};


export default MessageDialog;
