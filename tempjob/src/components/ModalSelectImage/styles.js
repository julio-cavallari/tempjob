import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { Surface, IconButton as Icon, Caption, TouchableRipple  } from 'react-native-paper';

const MODAL_HEIGHT = Dimensions.get('window').height;

export const ModalContainer = styled(Surface)`
  flex: 1;
  padding: 20px 0px;
  max-height: 104px;
  height: 104px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const IconButton = styled(TouchableRipple).attrs({
  borderless: true,
})`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin-left: 20px;
`;

export const IconButtonIcon = styled(Icon)`
  margin-top: 5px;
`;

export const IconButtonLabel = styled(Caption)`
  margin-top: -10px;
`;
