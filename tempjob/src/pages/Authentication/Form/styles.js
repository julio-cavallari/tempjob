import styled from 'styled-components/native';
import { HelperText, TextInput, Button, Title } from 'react-native-paper';


export const Container = styled.ScrollView.attrs({
    contentContainerStyle:{
        padding: 30,
        justifyContent: "space-between",
        alignItems: "center",
    }
})`
  background-color: ${props => props.theme?.colors?.surface};
`;

export const Column = styled.View`
  padding: 30px;
  flex: ${props => props.size ? props.size: 1};
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

export const TitleText = styled(Title)`
    text-align: center;
`;

export const ContainedTextInput = styled(TextInput).attrs({
    mode: "outlined",
})`
    margin-bottom: 15px;
`;

export const ErrorText = styled(HelperText)`
  margin-top: -10px;
`;
