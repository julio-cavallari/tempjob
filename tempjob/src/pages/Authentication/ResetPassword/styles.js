import styled from 'styled-components/native';
import { HelperText, TextInput, Button, Title } from 'react-native-paper';


export const Container = styled.ScrollView.attrs({
    contentContainerStyle:{
        padding: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
    }
})`
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
  flex: ${props => props.size ? props.size: 1};
  flex-direction: column;
  justify-content: flex-start;
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
