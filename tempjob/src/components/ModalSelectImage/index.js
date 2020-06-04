import React, {useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useTheme, TouchableRipple, Avatar, Portal, Paragraph } from 'react-native-paper';
import { ModalContainer, Row, IconButton, IconButtonIcon, IconButtonLabel } from './styles';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

function launchCamera(onSuccess) {
  const options = {
    mediaType: 'photo',
    cameraType: 'back',
    permissionDenied: {
      title: 'Permissão Negada',
      text:
        'Preciso da sua permissão para usar a camêra',
      reTryTitle: 'Tentar novamente',
      okTitle: 'Ok',
    },
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchCamera(options, response => {
    if (response.didCancel) {
      console.log('Usuário cancelou a ação');
    } else if (response.error) {
      console.error(response.error);
    } else {
      onSuccess(`data:image/png;base64,'${response.data}`);
    }
  });
}

function launchImageLibrary(onSuccess) {
  const options = {
    mediaType: 'photo',
    cameraType: 'back',
    permissionDenied: {
      title: 'Permissão Negada',
      text:
        'Preciso da sua permissão para acessar sua galeria',
      reTryTitle: 'Tentar novamente',
      okTitle: 'Ok',
    },
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('Usuário cancelou a ação');
    } else if (response.error) {
      console.error(response.error);
    } else {
      onSuccess(`data:image/png;base64,'${response.data}`);
    }
  });
}


function ModalSelectImage({onSelect, source}){
  // const [avatarSrc, setAvatarSrc] = useState(source);
  const [visible, setVisible] = useState(false);
  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);
  const theme = useTheme();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (visible) {
          return true;
        }else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [visible])
  );

  return (
    <>
      <Portal>
        <Modal
          isVisible={visible}
          onSwipeComplete={handleClose}
          swipeDirection="down"
          onBackdropPress={handleClose}
          onBackButtonPress={handleClose}
          propagateSwipe={true}
          backdropColor={theme.colors.backdrop}
          avoidKeyboard={true}
          backdropOpacity={1}
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <ModalContainer>
            <Row>
              <IconButton
                onPress={() => launchCamera((image) => {
                  onSelect(image);
                  // setAvatarSrc(image);
                })}
              >
                <>
                  <IconButtonIcon icon="camera" size={24} />
                  <IconButtonLabel>Câmera</IconButtonLabel>
                </>
              </IconButton>
              <IconButton
                onPress={() => launchImageLibrary((image) => {
                  onSelect(image);
                  // setAvatarSrc(image);
                })}
              >
                <>
                  <IconButtonIcon icon="image" size={24} />
                  <IconButtonLabel>Galeria</IconButtonLabel>
                </>
              </IconButton>
            </Row>
          </ModalContainer>
        </Modal>
      </Portal>
      <TouchableRipple
        onPress={handleOpen}
        borderless={true}
        delayPressIn={0}
        style={{
          height: 96,
          width: 96,
          alignSelf: "center",
          borderRadius: 48,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <>
        {source && source?.split("avatar/")[1] != "null" ? (
          <Avatar.Image size={64} source={{uri: source}} />
        ) : (
          <Avatar.Icon icon="account" size={64} />
        )}
        </>
      </TouchableRipple>
      <Paragraph style={{textAlign: "center", marginTop: -10, marginBottom: 20}}>Escolha sua foto de perfil</Paragraph>
    </>
  );
}

ModalSelectImage.propTypes = {
  source: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
};

ModalSelectImage.defaultProps = {
  onSelect: () => {},
  headerTitle: "Select one option",
};

export default ModalSelectImage;
