import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from 'react-native';
import { IconButton, Modal } from 'react-native-paper';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
  padding: 30px;
`;

export const Camera = styled(RNCamera)`
  position: absolute;
  flex: 1;
  width: ${width}px;
  height: ${height}px;
`;

export const CameraOverlayContainer = styled.View.attrs({
  aspectRatio: 1,
})``;

export const CameraButton = styled(IconButton).attrs({
  icon: "camera",
  size: 56
})`
  position: absolute;
  bottom: ${height * 0.045}px;
  background-color: #fff;
`;

export const CameraBackButton = styled(IconButton).attrs({
  icon: "arrow-left",
  size: 32,
  color: "#FFF"
})`
  position: absolute;
  left: 0px;
  top: ${height * 0.03}px;
`;

export const TitleContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: ${height * 0.08}px;
  left: 0px;
  width: ${width}px;
`;

export const PictureModal = styled(Modal)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
