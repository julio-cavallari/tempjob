import React, {useState} from 'react';
import { Button, Title } from 'react-native-paper';

import {Container, Row, ContainedTextInput, TitleText} from './styles';

function ResetPassword() {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Row style={{alignSelf: "flex-start"}}>
        <Title style={{fontSize: 32, lineHeight: 32, textAlign: "center"}}>TempJob</Title>
      </Row>
      <Row size={2}>
        <TitleText>Recuperar Senha</TitleText>
        <ContainedTextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
        />
        <Button mode="contained">Recuperar</Button>
      </Row>
    </Container>
  );
}

export default ResetPassword;


