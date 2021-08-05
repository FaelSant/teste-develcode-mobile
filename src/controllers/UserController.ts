import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {userData} from '../models/userData';
import api from '../services/api';

export const useUserController = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<userData[]>([]);
  const ListUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/users');
      setUserList(response.data);
      setLoading(false);
    } catch (error) {
      console.log('Error:', error);
      setLoading(false);
      setUserList([]);
      Alert.alert('Houve um erro com o servidor!');
    }
  };

  useEffect(() => {
    ListUsers();
  }, []);
  return {
    getController: {
      loading,
      userList,
    },
    handleController: {
      ListUsers,
    },
  };
};
