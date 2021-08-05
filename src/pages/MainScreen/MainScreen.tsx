import React from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import {theme} from '../../styles';
import {Container, TextComponent} from '../../styles/components';
import {HeaderContainer, TouchableView, Content} from './styles';
import SearchSvg from '../../assets/icons/search.svg';
import {UserListComponent} from '../../components/UserListComponent/UserListComponent';
import {RoundedButton} from '../../components/RoundedButton';
import {useNavigation} from '@react-navigation/core';
import {useUserController} from '../../controllers/UserController';
import {DateFormater} from '../../utils/DateFormater';
import {useState} from 'react';
import RoundedInput from '../../components/RoundedInput';
import {userData} from '../../models/userData';
import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
export const MainScreen: React.FC = () => {
  const navigation = useNavigation();
  const {getController, handleController} = useUserController();
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const [usersFiltered, setUsersFiltered] = useState<userData[]>([]);
  const onFocus = useIsFocused();

  useEffect(() => {
    handleController.ListUsers();
  }, [onFocus]);
  const handleFilter = (filterValue: string) => {
    const filteredList = getController.userList.filter(user => {
      return user.name.includes(filterValue);
    });
    setUsersFiltered(filteredList);
    setValue(filterValue);
  };

  useEffect(() => {
    handleController.ListUsers();
  }, [getController.saveUserLoading]);

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <HeaderContainer>
        <TextComponent fontSize={theme.fontSizes.largeTitle}>
          Cadastrados
        </TextComponent>
        <TouchableView onPress={() => setIsInputOpen(!isInputOpen)}>
          <SearchSvg />
        </TouchableView>
      </HeaderContainer>
      {isInputOpen && (
        <RoundedInput
          valueOfInputText={value}
          onChangeText={e => handleFilter(e.toString())}
          label="Busque pelo nome do usuário"
        />
      )}
      <Content>
        <FlatList
          style={{height: '100%'}}
          onRefresh={() => handleController.ListUsers()}
          refreshing={getController.loading}
          keyExtractor={item => item.age.toString()}
          data={usersFiltered.length ? usersFiltered : getController.userList}
          renderItem={({item}) => (
            <UserListComponent
              onPress={() =>
                navigation.navigate('DetailUser', {selectedUser: item})
              }
              age={DateFormater(item.age)}
              imageUri={item.photo_url}
              name={item.name}
              key={item.id}
            />
          )}
        />
      </Content>
      <RoundedButton onPress={() => navigation.navigate('CreateUser')} />
    </Container>
  );
};
