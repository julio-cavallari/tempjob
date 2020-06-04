import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import { Button, Dialog, Portal, Paragraph, useTheme } from 'react-native-paper';
import ModalSelect from '../../../components/ModalSelect';
import ModalSelectImage from '../../../components/ModalSelectImage';
import { TextInputMask } from 'react-native-masked-text'
import axios from 'axios';
import Config from '../../../config';

import {Container, Row, ContainedTextInput, TitleText, ErrorText} from './styles';

function Form({navigation}) {
  const theme = useTheme();
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [interestSpots, setInterestSpots] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [interestSpotsData, setInterestSpotsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [modalData, setModalData] = useState({
    type: "success",
    message: null,
    errors: null,
  });
  const [errors, setErrors] = useState({});

  const handleModalOpen = () => setModalVisible(true);
  const handleModalClose = () => setModalVisible(false);

  useEffect(() => {
    async function getStatesData(){
      const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
      if(response.status === 200){
        setStateData(response.data.map(state => ({id: state.id, name: state.nome})));
      }
    }

    async function getSpotsData(){
      const response = await axios.get(`${Config.apiUrl}/dropdown/job_opportunity`);
      if(response.status === 200){
        setInterestSpotsData(response.data.dropdown);
      }
    }
    if(isSubscribed){
      getStatesData();
      getSpotsData();
    }

    return () => setIsSubscribed(false)
  }, []);

  async function getCitiesData(stateId){
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
      if(response.status === 200){
        setCityData(response.data.map(city => ({id: city.id, name: city.nome})));
      }
  };

  async function createUser(){
    setButtonLoading(true);
    const data = {
      name: fullName,
      email,
      phone,
      state,
      city,
      password,
      confirm_password: confirmPassword,
      tags: interestSpots
    }
    try {
      const response = await axios.post(`${Config.apiUrl}/user`, data);
      console.log(response);
      setModalData({
        ...modalData,
        type: "success",
        message: response?.data?.message,
        errors: null,
      });
      handleModalOpen();
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.errors);
    }
    setButtonLoading(false);
  }

  const canSubmit = () => {
    return (
      fullName?.length > 0 &&
      state?.length > 0 &&
      city?.length > 0 &&
      email?.length > 0 &&
      interestSpots?.length > 0 &&
      password?.length > 0 &&
      confirmPassword?.length > 0
    );
  }
  return (
    <Container theme={theme}>
      <Text>Logo</Text>
      <Row>
        <Row>
            <TitleText>Crie sua conta</TitleText>
        </Row>
        <Row>
        <ModalSelectImage
          source={avatarSrc}
          onSelect={(image) => {
            setAvatarSrc(image);
          }}
        />
        <ContainedTextInput
            label="Nome Completo"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
          {errors?.name?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.name?.length > 0}
            >
              {errors?.name[0]}
            </ErrorText>
          )}
          <ContainedTextInput
            label="Telefone/Celular"
            value={phone}
            keyboardType="number-pad"
            render={props =>
              <TextInputMask
                {...props}
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) '
                }}
                onChangeText={setPhone}
              />
            }
          />
          {errors?.phone?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.phone?.length > 0}
            >
              {errors?.phone[0]}
            </ErrorText>
          )}
          <ModalSelect
            data={stateData}
            onSelect={item => {
              setState(item.name);
              getCitiesData(item.id);
            }}
            headerTitle="Selecione seu Estado"
          >
            {state ? state : 'Estado'}
          </ModalSelect>
          {errors?.state?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.state?.length > 0}
            >
              {errors?.state[0]}
            </ErrorText>
          )}
          <ModalSelect
            data={cityData}
            disabled={cityData.length === 0 ? true : false}
            onSelect={({name}) => {
              setCity(name);
            }}
            headerTitle="Selecione sua Cidade"
            isSearchable
          >
            {city ? city : 'Cidade'}
          </ModalSelect>
          {errors?.city?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.name?.length > 0}
            >
              {errors?.name[0]}
            </ErrorText>
          )}
          <ContainedTextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCompleteType="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          {errors?.email?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.email?.length > 0}
            >
              {errors?.email[0]}
            </ErrorText>
          )}
          <ModalSelect
            data={interestSpotsData}
            onSelect={setInterestSpots}
            headerTitle="Selecione as vagas que tem interesse"
            isSearchable
            maxSelectedItems={3}
            isMulti
          >
            Vagas de interesse
          </ModalSelect>
          {errors?.tags?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.tags?.length > 0}
            >
              {errors?.tags[0]}
            </ErrorText>
          )}
          <ContainedTextInput
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {errors?.password?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.password?.length > 0}
            >
              {errors?.password[0]}
            </ErrorText>
          )}
          <ContainedTextInput
            label="Digite novamente Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          {errors?.confirm_password?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.confirm_password?.length > 0}
            >
              {errors?.confirm_password[0]}
            </ErrorText>
          )}
        </Row>
      </Row>
      <Row>
        <Button mode="contained" onPress={createUser} disabled={buttonLoading} loading={buttonLoading} disabled={!canSubmit()}>Cadastrar</Button>
      </Row>
      <Portal>
        <Dialog
          visible={modalVisible}
          onDismiss={handleModalClose}
        >
          <Dialog.Title>{modalData.type === 'success' ? "Parabéns" : "Error"}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{modalData.message}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {
              handleModalClose();
              navigation.navigate("Auth", {screen: "Auth"})
            }}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Container>
  );
}

export default Form;


