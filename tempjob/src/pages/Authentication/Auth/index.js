import React, {useState, useEffect, useRef} from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import {Creators as UserActions} from '../../../store/ducks/user';
import { HelperText, Button, Title } from 'react-native-paper';

import {Container, Row, ContainedTextInput, TitleText} from './styles';

function Auth({navigation}) {
    const {token, user, authenticateFetching} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [redirected, setRedirected] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);


    const authenticate = () => {
        dispatch(UserActions.authenticationRequest(email, password));
    }

    useEffect(() => {
      async function verify(){
        if(token){
          await AsyncStorage.setItem('@tempjob_token', token);
          dispatch(UserActions.isAuthenticated());
          if(!redirected){
            console.log("Redirecionou");
            setRedirected(true);
            navigation.replace('App');
          }
        }
      }
      verify();
    }, [token]);
  return (
    <Container>
        <Title>TempJob</Title>
        <Row>
            <Row>
                <TitleText>Acesse sua conta</TitleText>
            </Row>
            <Row>
                <ContainedTextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    ref={emailInputRef}
                    keyboardType="email-address"
                    autoFocus
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    onSubmitEditing={() => passwordInputRef.current.focus()}
                    returnKeyType="next"
                />
                <ContainedTextInput
                    label="Senha"
                    value={password}
                    onChangeText={setPassword}
                    ref={passwordInputRef}
                    autoCapitalize="none"
                    autoCompleteType="password"
                    autoCorrect={false}
                    onSubmitEditing={authenticate}
                    returnKeyType="done"
                    secureTextEntry={true}
                />
            </Row>
        </Row>
        <Row>
            <Button mode="contained" loading={authenticateFetching} disabled={authenticateFetching} onPress={authenticate}>Entrar</Button>
            <Button onPress={() => navigation.navigate('ResetPassword')}>Esqueci minha senha</Button>
        </Row>
    </Container>
  );
}

export default Auth;


