import React from 'react';
import {StatusBar} from 'react-native';
import {Header} from '../../components/Header';
import {RoundedDetailedImage} from '../../components/RoundedDetailedImage/RoundedDetailedImage';
import {theme} from '../../styles';
import {Container} from '../../styles/components';
import {DetailUserProps} from '../../models/NavigationTypes';
import {EditableView} from '../../components/EditableView/EditableView';
import {DateFormater} from '../../utils/DateFormater';
export const DetailUser: React.FC<DetailUserProps> = ({navigation, route}) => {
  const {selectedUser} = route.params;
  console.log(selectedUser);
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
        <RoundedDetailedImage imageUri={selectedUser.photo_url} />
        <EditableView
          handleEdit={() => console.log()}
          iconName="user"
          headerLable={'Nome'}
          data={selectedUser.name}
        />
        <EditableView
          handleEdit={() => console.log()}
          iconName="calendar"
          headerLable={'Data de Nascimento'}
          data={DateFormater(selectedUser.age)}
        />
      </Container>
    </>
  );
};
