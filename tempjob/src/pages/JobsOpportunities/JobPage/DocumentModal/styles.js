import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Backdrop } from "react-native-backdrop";
import { Surface } from 'react-native-paper';

const MODAL_HEIGHT = Dimensions.get('window').height;
export const Modal = styled(Backdrop).attrs(props => ({
  backdropStyle:{
    backgroundColor: props.theme.colors.surface,
    height: MODAL_HEIGHT,
  }
}))``;

export const ModalHeader = styled(Surface)`
  width: 100%;
  height: 96px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(Surface)`
  padding: 20px;
  height: ${(MODAL_HEIGHT - 136 ).toString().split(".")[0]}px;
  justify-content: space-between;
`;

export const Container = styled(Surface)`

`;
