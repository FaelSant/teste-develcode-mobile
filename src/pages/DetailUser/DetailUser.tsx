import React from 'react';
import {StatusBar} from 'react-native';
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
export const DetailUser: React.FC<DetailUserProps> = ({navigation, route}) => {
  const {selectedUser} = route.params;
  const [isVisibleNameEditModal, setIsVisibleNameEditModal] =
    useState<boolean>(false);
  const [isVisibleAgeEditModal, setIsVisibleAgeEditModal] =
    useState<boolean>(false);

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
          handleEdit={() => setIsVisibleNameEditModal(true)}
          iconName="user"
          headerLable={'Nome'}
          data={selectedUser.name}
        />
        <EditableView
          handleEdit={() => setIsVisibleAgeEditModal(true)}
          iconName="calendar"
          headerLable={'Data de Nascimento'}
          data={DateFormater(selectedUser.age)}
        />
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
            <RoundedInput border={theme.colors.black} />
            <ButtonContainer>
              <Button
                onPress={() => setIsVisibleNameEditModal(false)}
                labelColor={theme.colors.black}
                backgroundColor={theme.colors.secundaryBlue}>
                Cancelar
              </Button>
              <Button
                padding="0px 20px 0px 30px"
                onPress={() => console.log}
                labelColor={theme.colors.primaryColor}
                backgroundColor={theme.colors.secundaryBlue}>
                Salvar
              </Button>
            </ButtonContainer>
          </Container>
        </ModalScreen>
        <ModalScreen
          onBackdropPress={() => setIsVisibleAgeEditModal(false)}
          swipeDirection="down"
          isVisible={isVisibleAgeEditModal}>
          <Container height="35%" background={theme.colors.secundaryBlue}>
            <TextComponent
              margin="0px 0px 0px 15px"
              fontSize={theme.fontSizes.largeTitle}>
              Insira a nova data de nascimento
            </TextComponent>
            <RoundedInput border={theme.colors.black} />
            <ButtonContainer>
              <Button
                onPress={() => setIsVisibleAgeEditModal(false)}
                labelColor={theme.colors.black}
                backgroundColor={theme.colors.secundaryBlue}>
                Cancelar
              </Button>
              <Button
                padding="0px 20px 0px 30px"
                onPress={() => console.log}
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
