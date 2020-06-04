import React, {useCallback} from 'react';
import { useTheme, Title, Paragraph, Caption, Portal, Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import { Modal, ModalHeader, ModalContainer, Container } from './styles';

import DocumentCard from './DocumentCard';

function DocumentModal({visible, handleOpen, handleClose, onClose, documents, jobId}){
  const theme = useTheme();

  const Header = () => (
    <ModalHeader>
      <Title >Documentos Obrigatórios</Title>
    </ModalHeader>
  );
  return (
    <Portal>
      <Modal
        theme={theme}
        visible={visible}
        handleOpen={handleOpen}
        handleClose={handleClose}
        onClose={onClose}
        swipeConfig={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        animationConfig={{
          speed: 14,
          bounciness: 4,
        }}
        header={() => <Header />}
        overlayColor={theme.colors.backdrop}
      >
        {documents.length ? (
          <ModalContainer>
            {documents.map(document => <DocumentCard key={document.id} data={document} jobId={jobId} />)}
            <Container>
              <Caption>Caso algum documento possua mais de 1 página, enviar todas num mesmo arquivo</Caption>
              <Button mode="contained" onPress={handleClose}>Fechar</Button>
            </Container>
          </ModalContainer>
        ) : (
          <ModalContainer>
            <Paragraph>Essa vaga não possui documentos obrigatórios para a candidatura</Paragraph>
            <Button mode="contained" onPress={handleClose}>Voltar</Button>
          </ModalContainer>
        )}

      </Modal>
    </Portal>
  );
}

DocumentModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  documents: PropTypes.array,
};

DocumentModal.defaultProps = {
  visible: false,
  handleOpen: () => {},
  handleClose: () => {},
  onClose: () => {},
  documents: [],
};


export default DocumentModal;
