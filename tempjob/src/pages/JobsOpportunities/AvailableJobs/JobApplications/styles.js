import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  padding: 0;
  background-color: transparent;
`;

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 15,
    backgroundColor: "transparent"
  },
  showsHorizontalScrollIndicator: false
})`
  background-color: transparent;
`;
