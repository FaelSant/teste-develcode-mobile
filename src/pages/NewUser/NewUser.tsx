import React from 'react';
import {StatusBar} from 'react-native';
import {Header} from '../../components/Header';
import {theme} from '../../styles';
import {Container} from '../../styles/components';
import {useNavigation} from '@react-navigation/core';
import {RoundedDetailedImage} from '../../components/RoundedDetailedImage/RoundedDetailedImage';
import RoundedInput from '../../components/RoundedInput';
import CalendarIcon from '../../assets/icons/calendar.svg';

export const NewUser: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        title="Novo usuário"
        HeaderColor={theme.colors.secundaryBlue}
      />
      <Container>
        <StatusBar
          backgroundColor={theme.colors.secundaryBlue}
          barStyle="dark-content"
        />
        <RoundedDetailedImage />
        <RoundedInput
          errorText={'Você precisa inserir o nome'}
          hasError={true}
          label={'Nome'}
          labelColor={theme.colors.grey}
        />
        <RoundedInput
          rightComponent={<CalendarIcon />}
          errorText={'Você precisa inserir o nome'}
          hasError={true}
          label={'Nome'}
          labelColor={theme.colors.grey}
        />
      </Container>
    </>
  );
};
