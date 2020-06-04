import React from 'react';
import { Image, Dimensions } from 'react-native';
import {Button, Title, useTheme} from 'react-native-paper'
import {Container, Row, Overlay} from './styles';

function initialScreen({navigation}) {
  const theme = useTheme();
  return (
    <Container
      source={require("./background.jpg")}
    >
      <Overlay>
      {/* <Image
        resizeMode="cover"
        style={{
          position: "absolute",
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
        }}
      /> */}
      <Row size={2}>
        <Title style={{fontSize: 48, lineHeight: 48, color: theme.colors.primary}}>TempJob</Title>
      </Row>
      <Row>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('Auth');
          }}
        >
          Acessar
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Form')}
        >
          Criar Conta
        </Button>
      </Row>
      </Overlay>
    </Container>);
}

export default initialScreen;


