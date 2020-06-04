import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
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
  flex: 1;
  max-height: ${MODAL_HEIGHT}px;
  height: auto;
`;

export const Container = styled(FlatList)`
`;

export const ButtonsContainer = styled(Surface)`
  padding: 10px 20px;
  elevation: 12;
  justify-content: center;
  align-items: flex-end;
`;

export const ChipsContainer = styled(Surface)`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${props => props.count > 0 ? 10 : 0}px;
  max-width: 100%;
  flex-wrap: wrap;
`;
