import React, { useEffect, useState } from 'react';
import { Divider, Subheading, Button, Title, useTheme, Portal } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect'
import {Creators as JobApplicationsActions} from '../../../../../store/ducks/jobApplication';
import { Container, RowContainer, ButtonContainer, IconButton, IconButtonIcon, IconButtonLabel } from './styles';
import Config from '../../../../../config';
import ImagePicker from 'react-native-image-picker';
import ImageView from "react-native-image-viewing";

const userSelector = createSelector(
  state => state.user,
  user => user.user
);

const documentsSelector = createSelector(
  state => state.jobApplication,
  jobApplication => jobApplication
);

function DocumentCard({data, jobId}){
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const {documents, jobApplication} = useSelector(documentsSelector);
  const toggleCamera = () => dispatch(JobApplicationsActions.jobApplicationToggleCamera());
  const getDocumentData = () => dispatch(JobApplicationsActions.jobApplicationGetDocumentData(data?.id));
  const setDocumentName = () => dispatch(JobApplicationsActions.jobApplicationSetDocumentName(data?.name));
  const saveDocument = (picture) =>
    dispatch(JobApplicationsActions
    .jobApplicationSaveDocumentRequest(
      data?.id,
      jobId,
      picture
    )
  );
  const toggleDocumentMessageDialog = () => dispatch(JobApplicationsActions.jobApplicationToggleDocumentMessageDialog());

  const [documentGaleryIsVisible, setDocumentGaleryIsVisible] = useState(false);

  const handleDocumentGaleryOpen = () => setDocumentGaleryIsVisible(true);
  const handleDocumentGaleryClose = () => setDocumentGaleryIsVisible(false);
  return (
    <Container>
      <Subheading>{data?.name}</Subheading>
      <RowContainer>
        <ButtonContainer>
          <Button
            mode="contained"
            onPress={() => ImagePicker.launchImageLibrary({title: "Selecione a foto do documento"}, (response) => {
              getDocumentData();
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const time = new Date().getTime();
                saveDocument(`data:image/png;base64,'${response.data}`);
                toggleDocumentMessageDialog();
              }
            })}
          >
            Enviar
          </Button>
        </ButtonContainer>
        <IconButton
          onPress={() => {
            toggleCamera();
            getDocumentData();
            setDocumentName();
          }}
        >
          <>
            <IconButtonIcon icon="camera" size={24} />
            <IconButtonLabel>Tirar Foto</IconButtonLabel>
          </>
        </IconButton>
        <IconButton onPress={handleDocumentGaleryOpen}>
          <>
            <IconButtonIcon icon="history" size={24} />
            <IconButtonLabel>Histórico</IconButtonLabel>
          </>
        </IconButton>
      </RowContainer>
      <Divider />
      <Portal>
        <ImageView
          images={documents
            .filter(
              document => document.job_opportunity_id == jobId
              && document.document_id == data?.id
            ).map(document => ({uri: `${Config.imagesUrl}${document.path}`}))}
          imageIndex={0}
          visible={documentGaleryIsVisible}
          onRequestClose={handleDocumentGaleryClose}
          animationType="slide"
        />
      </Portal>
    </Container>
  );
}

export default React.memo(DocumentCard);
