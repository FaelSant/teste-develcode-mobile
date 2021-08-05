import React, {useState} from 'react';
import {Platform, StatusBar, ActivityIndicator} from 'react-native';
import {Header} from '../../components/Header';
import {theme} from '../../styles';
import {Container} from '../../styles/components';
import {useNavigation} from '@react-navigation/core';
import {RoundedDetailedImage} from '../../components/RoundedDetailedImage/RoundedDetailedImage';
import RoundedInput from '../../components/RoundedInput';
import CalendarIcon from '../../assets/icons/calendar.svg';
import Button from '../../components/Button';
import {Alert} from 'react-native';
import {useUserController} from '../../controllers/UserController';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment';
export const NewUser: React.FC = () => {
  const navigation = useNavigation();
  const [filePath, setFilePath] = useState({});
  const {getController} = useUserController();
  const [isDateSelectOpen, setIsDateSelectOpen] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const chooseFile = () => {
    let options: any = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('Usuário cancelou o uso da câmera');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Sem câmera disponível no dispositivo');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Sem as permissões necessárias');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
      setFilePath(response),
        getController.formik.setFieldValue('photo_url', response.assets[0].uri);
    });
  };
  const onChange = (event: any, value: any) => {
    value && setDate(value);
    if (Platform.OS === 'android') {
      setIsDateSelectOpen(false);
    }
  };

  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        title="Novo usuário"
        HeaderColor={theme.colors.secundaryBlue}
      />
      {isDateSelectOpen && (
        <DateTimePicker
          timeZoneOffsetInMinutes={1}
          value={date}
          mode={'date'}
          display={'spinner'}
          onChange={onChange}
        />
      )}
      <Container>
        <StatusBar
          backgroundColor={theme.colors.secundaryBlue}
          barStyle="dark-content"
        />
        <RoundedDetailedImage
          imageUri={`${filePath && getController.formik.values.photo_url}`}
          handleAddPhoto={() => chooseFile()}
        />
        <RoundedInput
          valueOfInputText={getController.formik.values.name}
          errorText={getController.formik.errors.name}
          onChangeText={e =>
            getController.formik.setFieldValue('name', e.toString())
          }
          hasError={getController.formik.touched.name}
          label={'Nome'}
          labelColor={theme.colors.grey}
        />
        <RoundedInput
          rightComponent={<CalendarIcon />}
          valueOfInputText={moment(date).format('DD/MM/yyyy')}
          errorText={'Você precisa digitar a idade'}
          hasError={date.toString().length === 0}
          label={'Data de nascimento'}
          isEditable={false}
          labelColor={theme.colors.grey}
          onSelectDate={() => setIsDateSelectOpen(true)}
        />
        <Button
          onPress={() => {
            getController.formik.handleSubmit();
            getController.formik.setFieldValue('age', date);
          }}
          padding={'15px 80px 15px 80px'}
          margin={'20px 0px'}
          backgroundColor={theme.colors.primaryColor}>
          {getController.saveUserLoading ? (
            <ActivityIndicator color={theme.colors.white} size={20} />
          ) : (
            'Salvar'
          )}
        </Button>
        <Button
          onPress={() => {}}
          padding={'15px 80px 15px 80px'}
          margin={'10px 0px'}
          labelColor={theme.colors.black}
          backgroundColor={theme.colors.white}>
          Cancelar
        </Button>
      </Container>
    </>
  );
};
