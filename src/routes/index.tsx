import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {MainScreen} from '../pages/MainScreen/MainScreen';
import {NewUser} from '../pages/NewUser/NewUser';
import {userData} from '../models/userData';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../models/NavigationTypes';
import {DetailUser} from '../pages/DetailUser/DetailUser';
const Stack = createStackNavigator<RootStackParamList>();
export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateUser"
        component={NewUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailUser"
        component={DetailUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
