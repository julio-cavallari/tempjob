import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Dimensions } from 'react-native';

import { Surface, Modal } from 'react-native-paper';

const { height, width } = Dimensions.get('window');

export const Container = styled(Surface)`
  flex: 1;
`;

export const List = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 84,
  }
})`
`;

export const Row = styled(Surface)`
  flex: 1;
  padding: 20px 15px;
`;

export const LoadingPlaceholder = styled(ShimmerPlaceHolder)`
  width: 100%;
  height: ${props => props.lines * 24}px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const TitleContainer = styled(Surface)`
  width: 100%;
  height: 96px;
  padding: 40px 20px 20px;
  justify-content: center;
  align-items: center;
`;

export const PictureModal = styled(Modal).attrs({
  contentContainerStyle: {
    flex: 1,
    padding: width * 0.0625
  }
})`
  justify-content: center;
`;

export const PictureModalContainer = styled(Surface)`
  flex: 1;
  padding: ${width * 0.0625}px;
  justify-content: space-between;
  elevation: 4;
`;

export const PictureModalContainerActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Picture = styled.Image.attrs({
  resizeMode: "cover",
  resizeMethod: "scale"
})`
  height: ${height * 0.65}px;
  width: ${width * 0.75}px;
`;
