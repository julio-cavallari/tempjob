import React, {useState, useEffect, useCallback} from 'react';
import { View, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Api} from '../../services';
import { useSelector, useDispatch } from 'react-redux';
import {Creators as UserActions} from '../../store/ducks/user';
import LottieView from 'lottie-react-native';

function SplashScreen({navigation}) {
  const [redirected, setRedirected] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const dispatch = useDispatch();

  const isAuthenticated = () => dispatch(UserActions.isAuthenticated());
  const refreshToken = (user, token) => dispatch(UserActions.setNewToken(user, token));
  const setErrors = (errors) => dispatch(UserActions.setErrors(errors));

  useFocusEffect(
    useCallback(() => {
      async function verify(){
        try {
          const token = await AsyncStorage.getItem('@tempjob_token');
          if(token !== null) {
            const response = await Api('post', 'refresh');
            if(response.status === 200){
              await AsyncStorage.setItem('@tempjob_token', response.data.token);
              refreshToken(response.data.user, response.data.token);
              isAuthenticated();
              if(!redirected){
                setRedirected(true);
                navigation.replace('App');
              }
            }else{
              setErrors(response.data);
              if(!redirected){
                setRedirected(true);
                navigation.replace('Auth', {screen: "Auth"});
              }
            }
          }else{
            if(!redirected){
              setRedirected(true);
              navigation.replace('Auth');
            }
          }
        } catch(e) {
          console.error(e);
        }
      }
      if(isSubscribed){
        verify();
      }
      return () => setIsSubscribed(false);
    }, [])
  );
  return (
    <View
      style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          justifyContent: "center",
          alignItems: "center"
      }}
    >
      <LottieView source={require('./loading-animation.json')} resizeMode="cover" autoPlay style={{width:280, height:240}}/>
  </View>
);
}

export default SplashScreen;


