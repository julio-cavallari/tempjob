import axios from 'axios';
import Config from '../config';
import AsyncStorage from '@react-native-community/async-storage';

export const api = axios.create({
  baseURL: Config.apiUrl,
});

const apiFetchData = async (method, url, data, headers) => {
  try {
    const token = await AsyncStorage.getItem('@tempjob_token');
    const response = api.request({
      method,
      url,
      data,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}

export default apiFetchData;
