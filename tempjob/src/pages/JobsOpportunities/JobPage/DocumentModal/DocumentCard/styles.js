import styled from 'styled-components/native';

import { Surface, IconButton as Icon, Caption, TouchableRipple } from 'react-native-paper';

export const Container = styled(Surface)`
  width: 100%;
  min-height: 96px;
`;

export const RowContainer = styled(Surface)`
  padding: 20px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonContainer = styled(Surface)`
  flex: 1;
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
