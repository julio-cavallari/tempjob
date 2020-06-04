import styled from 'styled-components/native';

import { Surface, IconButton } from 'react-native-paper';

export const Container = styled(Surface)`
  width: 100%;
  height: 112px;
  padding: 0px 10px;
`;

export const RowContainer = styled(Surface)`
  flex: 1;
  padding: 20px 15px;
  flex-direction: row;
`;

export const DetailsContainer = styled(Surface)`
  flex: 5;
`;

export const ButtonContainer = styled(Surface)`
  flex: 1;
`;

export const Button = styled(IconButton)`
  border-radius: 4px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  elevation: 4;
`;
