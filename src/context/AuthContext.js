import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../util/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (email, password) => {
    // get user from db?
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/signin`, {
        email,
        password,
      })
      .then((res) => {
        setUserInfo(res.data);
        setUserToken(res.data.token);
        AsyncStorage.setItem('userToken', res.data.token);
        AsyncStorage.setItem('userInfo', JSON.stringify(res.data));
      })
      .catch((e) => {
        console.log(`Login failed, ${e.message}`);
      });
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(`isLoggedin error: ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoading, userToken, userInfo, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
