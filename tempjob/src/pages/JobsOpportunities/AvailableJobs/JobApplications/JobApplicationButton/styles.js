import styled from 'styled-components';

import { TouchableRipple } from 'react-native-paper';

export const Container = styled(TouchableRipple).attrs({
  borderless: true,
})`
  margin-right: 10px;
  border-radius: 32px;
`;
