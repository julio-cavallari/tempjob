import React, {useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect'
import {Creators as JobOpportunitiesActions} from '../../../store/ducks/jobOpportunity';
import {Creators as JobApplicationsActions} from '../../../store/ducks/jobApplication';
import { Divider, Title, Paragraph, Button, Subheading, Portal, FAB, Dialog } from 'react-native-paper';

import { Container, Row, List, LoadingPlaceholder, TitleContainer, PictureModal, PictureModalContainer, PictureModalContainerActions, Picture } from './styles';
import DocumentModal from './DocumentModal';
import MessageDialog from './Dialog';
import MaskedCamera from '../../../components/MaskedCamera';

const jobOpportunitySelector = createSelector(
  state => state.jobOpportunity,
  jobOpportunity => jobOpportunity
);

const jobApplicationSelector = createSelector(
  state => state.jobApplication,
  jobApplication => jobApplication
);

const userSelector = createSelector(
  state => state.user,
  user => user.user
);

function JobPage({navigation, route}){
  const {jobOpportunity, fetching} = useSelector(jobOpportunitySelector);
  const jobApplication = useSelector(jobApplicationSelector);
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const jobApplicationRequest = () => dispatch(JobApplicationsActions.jobApplicationRequest(jobOpportunity.id));
  const cancelJobApplicationRequest = () => dispatch(JobApplicationsActions.jobApplicationCancelApplicationRequest(jobOpportunity?.id));
  const dismissMessageDialog = () => dispatch(JobApplicationsActions.jobApplicationDismissModal());
  const toggleCamera = () => dispatch(JobApplicationsActions.jobApplicationToggleCamera());
  const toggleDocumentMessageDialog = () => dispatch(JobApplicationsActions.jobApplicationToggleDocumentMessageDialog());
  const saveDocument = (picture) =>
  dispatch(JobApplicationsActions
    .jobApplicationSaveDocumentRequest(
      jobApplication.documentData.documentId,
      jobOpportunity?.id,
      picture
    )
  );

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [FABGroupState, setFABGroupState] = useState(false);
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState(false);
  const [modalPictureIsVisible, setModalPictureIsVisible] = useState(false);
  const [currentPicture, setCurrentPicture] = useState({});
  const handlePictureModal = () => setModalPictureIsVisible(!modalPictureIsVisible)

  const handleModalOpen = () => setModalIsVisible(true);
  const handleModalClose = () => setModalIsVisible(false);

  const handlDeleteConfirmDialogOpen = () => setDeleteConfirmDialog(true);
  const handlDeleteConfirmDialogClose = () => setDeleteConfirmDialog(false);


  useFocusEffect(
    React.useCallback(() => {
      dispatch(JobOpportunitiesActions.jobOpportunityRequest(route.params?.jobId));

      return () => dispatch(JobOpportunitiesActions.wipeJobOpportunity());
    }, [])
  );
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (modalIsVisible) {
          handleModalClose();
          return true;
        }else if(jobApplication.modal){
          dismissMessageDialog();
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [modalIsVisible, jobApplication.modal, handleModalOpen, dismissMessageDialog])
  );
  return (
    <Container>
      <List>
        <TitleContainer>
          <LoadingPlaceholder lines={2} autoRun={true} visible={!fetching}>
            <Title >{jobOpportunity?.name}</Title>
          </LoadingPlaceholder>
          <LoadingPlaceholder lines={1} autoRun={true} visible={!fetching}>
            <Subheading>{jobOpportunity?.company?.name}</Subheading>
          </LoadingPlaceholder>
        </TitleContainer>
        <Row>
          <Title>Descrição da Vaga</Title>
          <LoadingPlaceholder lines={2} autoRun={true} visible={!fetching}>
            <Paragraph>{jobOpportunity?.description}</Paragraph>
          </LoadingPlaceholder>
        </Row>
        <Divider />
        <Row>
          <Title>Carga Horária</Title>
          <LoadingPlaceholder lines={1} autoRun={true} visible={!fetching}>
            <Paragraph>{jobOpportunity?.workload}</Paragraph>
          </LoadingPlaceholder>
        </Row>
        <Divider />
        <Row>
          <Title>Periodo de Contratação</Title>
          <LoadingPlaceholder lines={1} autoRun={true} visible={!fetching}>
            <Paragraph>{jobOpportunity?.hiring_period}</Paragraph>
          </LoadingPlaceholder>
        </Row>
        <Divider />
        <Row>
          <Title>Escolaridade</Title>
          <LoadingPlaceholder lines={1} autoRun={true} visible={!fetching}>
            <Paragraph>{jobOpportunity?.schooling}</Paragraph>
          </LoadingPlaceholder>
        </Row>
        <Divider />
        <Row>
          <Title>Documentos Obrigatórios</Title>
          <LoadingPlaceholder lines={3} autoRun={true} visible={!fetching}>
            {jobOpportunity?.documents.map(document => <Paragraph key={document.id}>{document.name}</Paragraph>)}
          </LoadingPlaceholder>
        </Row>
        <Divider />
        {!route.params?.applied ? (
          <Button
            mode="contained"
            loading={jobApplication.fetching}
            disabled={jobApplication.fetching}
            onPress={jobApplicationRequest}
          >
              Me Candidatar
          </Button>
        ) : (
          <>
            <Button
              mode="contained"
              onPress={handleModalOpen}
            >
                Atualizar Documentos
            </Button>
            <Portal>
              <Dialog
                visible={deleteConfirmDialog}
                onDismiss={handlDeleteConfirmDialogClose}
              >
                <Dialog.Title>Atenção</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    Você tem certeza que deseja cancelar a aplicação para a vaga {jobOpportunity?.name} na empresa {jobOpportunity?.company?.name}?
                  </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    onPress={() => {
                      handlDeleteConfirmDialogClose();
                    }}
                  >
                    Não
                  </Button>
                  <Button
                    onPress={() => {
                      handlDeleteConfirmDialogClose();
                      cancelJobApplicationRequest();
                      navigation.goBack();
                    }}
                  >
                    Sim
                  </Button>
                </Dialog.Actions>
              </Dialog>
              <FAB.Group
                open={FABGroupState}
                icon="settings"
                actions={[
                  { icon: 'delete', onPress: handlDeleteConfirmDialogOpen },
                ]}
                onStateChange={({open}) => setFABGroupState(open)}
                onPress={() => {
                  if (FABGroupState) {

                  }
                }}
              />
            </Portal>
          </>
        )}
       </List>
      <DocumentModal
        visible={modalIsVisible}
        handleOpen={handleModalOpen}
        handleClose={handleModalClose}
        documents={jobOpportunity?.documents}
        jobId={jobOpportunity?.id}
      />
      <MessageDialog
        visible={jobApplication.modal}
        onDismiss={dismissMessageDialog}
        onOkButtonPress={() => {
          if(jobOpportunity?.documents.length > 0){
            setModalIsVisible(true);
          }
        }}
      />
      {jobApplication.camera && (
        <MaskedCamera
          maskType="rect"
          onTakePicture={picture => {
            toggleCamera();
            const time = new Date().getTime();
            setCurrentPicture(`data:image/png;base64,${picture.base64}`);
            handlePictureModal();
          }}
        />
      )}

      <Portal>
        <PictureModal visible={modalPictureIsVisible} onDismiss={handlePictureModal}>
          <PictureModalContainer>
            <Title style={{top: -10, fontSize: 32, lineHeight: 32}}>Ficou nítida a foto?</Title>
            {!!currentPicture && <Picture source={{uri: currentPicture}} />}
            <PictureModalContainerActions>
              <Button onPress={handlePictureModal}>Não</Button>
              <Button onPress={() => {
                saveDocument(currentPicture);
                toggleDocumentMessageDialog();
              }}>Sim</Button>
            </PictureModalContainerActions>
          </PictureModalContainer>
        </PictureModal>
        <Dialog
          visible={jobApplication.documentMessageDialog}
          onDismiss={toggleDocumentMessageDialog}
        >
          <Dialog.Content>
            <Paragraph>Documento salvo com sucesso</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {
              toggleDocumentMessageDialog();
              if(modalPictureIsVisible) handlePictureModal();
            }}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Container>
  );
}

export default JobPage;
