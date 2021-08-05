import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../pages/MainScreen/MainScreen';
import {NewUser} from '../pages/NewUser/NewUser';
type RootStackParamList = {
  MainScreen: undefined;
  CreateUser: undefined;
};
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
    </Stack.Navigator>
  );
};
