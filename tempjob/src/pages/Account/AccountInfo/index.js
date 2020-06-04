import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import { Button, useTheme, HelperText } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { TextInputMask } from 'react-native-masked-text';
import ModalSelect from '../../../components/ModalSelect';
import ModalSelectImage from '../../../components/ModalSelectImage';
import axios from 'axios';
import Config from '../../../config';
import {Creators as UserActions} from '../../../store/ducks/user';

import {Container, Row, ContainedTextInput, TitleText, ErrorText } from './styles';

const UserSelector = createSelector(
  state => state.user,
  user => user
)

function Form({navigation}) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const {user, errors} = useSelector(UserSelector);
  const [avatarSrc, setAvatarSrc] = useState(`${Config.imagesUrl}/avatar/${user?.avatar}`);
  const [fullName, setFullName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [state, setState] = useState(user?.state);
  const [city, setCity] = useState(user?.city);
  const [email, setEmail] = useState(user?.email);
  const [interestSpots, setInterestSpots] = useState(user?.tags.map(tag => ({id: tag?.job_opportunity?.id, name: tag?.job_opportunity?.name})));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState(user?.cpf);
  const [birthday, setBirthday] = useState(user?.birthday);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [interestSpotsData, setInterestSpotsData] = useState([]);

  const updateUser = () => dispatch(UserActions.userUpdateRequest({
    id: user.id, name: fullName, email, cpf, birthday, phone, state, city, password, confirm_password: confirmPassword, tags: interestSpots
  }));
  const updateUserAvatar = (image) => dispatch(UserActions.userUpdateAvatarRequest(image));
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
    getStatesData();
    getSpotsData();
  }, []);

  async function getCitiesData(stateId){
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
      if(response.status === 200){
        setCityData(response.data.map(city => ({id: city.id, name: city.nome})));
      }
  };
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
      <Row>
        <Row>
            <TitleText>Sua conta</TitleText>
        </Row>
        <Row>
          <ModalSelectImage
            source={avatarSrc}
            onSelect={(image) => {
              setAvatarSrc(image);
              updateUserAvatar(image);
            }}
          />
          <ContainedTextInput
            label="Nome Completo"
            value={fullName}
            onChangeText={setFullName}
            error={errors?.name?.length > 0}
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
            label="Email"
            value={email}
            onChangeText={setEmail}
            error={errors?.email?.length > 0}
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
          <ContainedTextInput
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={errors?.password?.length > 0}
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
            error={errors?.confirm_password?.length > 0}
          />
          {errors?.confirm_password?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.confirm_password?.length > 0}
            >
              {errors?.confirm_password[0]}
            </ErrorText>
          )}
          <ContainedTextInput
            label="Telefone/Celular"
            value={phone}
            keyboardType="number-pad"
            error={errors?.phone?.length > 0}
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
          <ContainedTextInput
            label="CPF"
            value={cpf}
            keyboardType="number-pad"
            error={errors?.cpf?.length > 0}
            render={props =>
              <TextInputMask
                {...props}
                type={'cpf'}
                onChangeText={setCpf}
              />
            }
          />
          {errors?.cpf?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.cpf?.length > 0}
            >
              {errors?.cpf[0]}
            </ErrorText>
          )}
          <ContainedTextInput
            label="Data de nascimento"
            value={birthday}
            keyboardType="number-pad"
            error={errors?.birthday?.length > 0}
            render={props =>
              <TextInputMask
                {...props}
                type={'custom'}
                options={{
                  mask: "99/99/9999"
                }}
                onChangeText={setBirthday}
              />
            }
          />
          {errors?.birthday?.length > 0 && (
            <ErrorText
              type="error"
              visible={errors?.birthday?.length > 0}
            >
              {errors?.birthday[0]}
            </ErrorText>
          )}
          <ModalSelect
            data={interestSpotsData}
            onSelect={setInterestSpots}
            selected={interestSpots}
            error={errors?.tags?.length > 0}
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
          <ModalSelect
            data={stateData}
            error={errors?.state?.length > 0}
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
            error={errors?.city?.length > 0}
            disabled={cityData.length === 0 ? true : false}
            onSelect={item => setCity(item.name)}
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
        </Row>
      </Row>
      <Row>
        <Button disabled={!canSubmit()} mode="contained" onPress={updateUser}>Salvar</Button>
      </Row>
    </Container>
  );
}

export default Form;


