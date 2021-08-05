import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {userData} from '../models/userData';
import api from '../services/api';
import * as Yup from 'yup';
import {useFormik} from 'formik';
export const useUserController = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<userData[]>([]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('* Campo obrigatório'),
    age: Yup.string().required('* Campo obrigatório'),
  });
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

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
    },
    onSubmit: values => console.log(values),
    validationSchema,
  });
  useEffect(() => {
    ListUsers();
  }, []);
  return {
    getController: {
      loading,
      userList,
      formik,
    },
    handleController: {
      ListUsers,
    },
  };
};
