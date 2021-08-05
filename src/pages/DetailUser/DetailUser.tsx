import React from 'react';
import {ActivityIndicator, Alert, Platform, StatusBar} from 'react-native';
import {Header} from '../../components/Header';
import {RoundedDetailedImage} from '../../components/RoundedDetailedImage/RoundedDetailedImage';
import {theme} from '../../styles';
import {
  Container,
  GroupComponent,
  TextComponent,
} from '../../styles/components';
import {DetailUserProps} from '../../models/NavigationTypes';
import {EditableView} from '../../components/EditableView/EditableView';
import {DateFormater} from '../../utils/DateFormater';
import {ModalScreen} from '../../components/ModalScreen/ModalScreen';
import RoundedInput from '../../components/RoundedInput';
import Button from '../../components/Button';
import {ButtonContainer} from './styles';
import {useState} from 'react';
import {useUserController} from '../../controllers/UserController';
import {useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
export const DetailUser: React.FC<DetailUserProps> = ({navigation, route}) => {
  const {selectedUser} = route.params;
  const [isVisibleNameEditModal, setIsVisibleNameEditModal] =
    useState<boolean>(false);
  const [isVisibleAgeEditModal, setIsVisibleAgeEditModal] =
    useState<boolean>(false);
  const [filePath, setFilePath] = useState({});
  const {getController} = useUserController();
  const [isDateSelectOpen, setIsDateSelectOpen] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  useEffect(() => {
    getController.Editformik.setFieldValue('name', selectedUser.name);
    getController.Editformik.setFieldValue('age', selectedUser.age);
    getController.Editformik.setFieldValue('photo_url', selectedUser.photo_url);
    getController.Editformik.setFieldValue('id', selectedUser.id);
    setDate(new Date(selectedUser.age));
  }, []);
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
        getController.Editformik.setFieldValue(
          'photo_url',
          response.assets[0].uri,
        );
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
        title="Detalhes"
        HeaderColor={theme.colors.secundaryBlue}
      />
      <Container>
        <StatusBar
          backgroundColor={theme.colors.secundaryBlue}
          barStyle="dark-content"
        />
        <RoundedDetailedImage
          handleAddPhoto={() => chooseFile()}
          imageUri={getController.Editformik.values.photo_url}
        />
        <EditableView
          handleEdit={() => setIsVisibleNameEditModal(true)}
          iconName="user"
          headerLable={'Nome'}
          data={getController.Editformik.values.name}
        />
        <EditableView
          handleEdit={() => setIsDateSelectOpen(true)}
          iconName="calendar"
          headerLable={'Data de Nascimento'}
          data={DateFormater(date)}
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
        <Button
          onPress={() => {
            getController.Editformik.setFieldValue('age', date);
            getController.Editformik.handleSubmit();
          }}
          padding={'15px 80px 15px 80px'}
          margin={'20px 0px'}
          backgroundColor={theme.colors.primaryColor}>
          {getController.editUserLoading ? (
            <ActivityIndicator color={theme.colors.white} size={20} />
          ) : (
            'Salvar'
          )}
        </Button>
        <ModalScreen
          onBackdropPress={() => setIsVisibleNameEditModal(false)}
          swipeDirection="down"
          isVisible={isVisibleNameEditModal}>
          <Container height="30%" background={theme.colors.secundaryBlue}>
            <TextComponent
              margin="0px 0px 0px 15px"
              fontSize={theme.fontSizes.largeTitle}>
              Insira o novo nome
            </TextComponent>
            <RoundedInput
              valueOfInputText={getController.Editformik.values.name}
              onChangeText={e =>
                getController.Editformik.setFieldValue('name', e.toString())
              }
              border={theme.colors.black}
            />
            <ButtonContainer>
              <Button
                onPress={() => setIsVisibleNameEditModal(false)}
                labelColor={theme.colors.black}
                backgroundColor={theme.colors.secundaryBlue}>
                Cancelar
              </Button>
              <Button
                padding="0px 20px 0px 30px"
                onPress={() => {
                  getController.Editformik.handleSubmit();
                  setIsVisibleNameEditModal(false);
                }}
                labelColor={theme.colors.primaryColor}
                backgroundColor={theme.colors.secundaryBlue}>
                Salvar
              </Button>
            </ButtonContainer>
          </Container>
        </ModalScreen>
      </Container>
    </>
  );
};
