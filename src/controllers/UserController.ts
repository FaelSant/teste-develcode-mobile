import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {userData} from '../models/userData';
import api from '../services/api';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
export const useUserController = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<userData[]>([]);
  const [saveUserLoading, setSaveUserLoading] = useState<boolean>(false);
  const [editUserLoading, setEditUserLoading] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('* Campo obrigatório'),
  });
  const navigation = useNavigation();
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
  const SaveUser = async (values: userData) => {
    const newUser = {
      name: values.name,
      age: moment.utc(values.age).format('DD/MM/yyyy'),
    };
    const formData = new FormData();
    formData.append('name', newUser.name);
    formData.append('age', moment(newUser.age).format('yyyy-DD-MM'));
    formData.append('photo_url', {
      uri: values.photo_url,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    console.log(formData);
    try {
      setSaveUserLoading(true);
      const response = await api.post('/users', formData, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data;`,
        },
      });
      navigation.navigate('MainScreen');
      setSaveUserLoading(false);
      ListUsers();
    } catch (error) {
      console.log('Error:', error);
      setSaveUserLoading(false);
      Alert.alert('Houve um erro com o servidor!');
    }
  };

  const EditUser = async (values: userData) => {
    const newUser = {
      name: values.name,
      age: moment.utc(values.age).format('yyyy-MM-DD'),
    };
    const formData = new FormData();
    formData.append('name', newUser.name);
    formData.append('age', newUser.age);
    formData.append('photo_url', {
      uri: values.photo_url, //Your Image File Path
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    console.log('formData:', formData);
    try {
      setEditUserLoading(true);
      const response = await api.put(`/users/${values.id}`, formData, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data;`,
        },
      });
      setEditUserLoading(false);
    } catch (error) {
      console.log('Error:', error);
      setEditUserLoading(false);
      Alert.alert('Houve um erro com o servidor!');
    }
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      photo_url: '',
    },
    onSubmit: values => SaveUser(values),
    validationSchema,
  });
  const Editformik = useFormik({
    initialValues: {
      name: '',
      age: '',
      photo_url: '',
      id: '',
    },
    onSubmit: values => EditUser(values),
  });

  useEffect(() => {
    ListUsers();
  }, []);
  return {
    getController: {
      loading,
      userList,
      formik,
      saveUserLoading,
      Editformik,
      editUserLoading,
    },
    handleController: {
      ListUsers,
    },
  };
};
