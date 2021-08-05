import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {userData} from './userData';

export type RootStackParamList = {
  MainScreen: {userSelected: userData};
  CreateUser: undefined;
  DetailUser: undefined;
};
type DetailUserScreenRouteProps = RouteProp<RootStackParamList, 'DetailUser'>;
type DetailsUserScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DetailUser'
>;
export type DetailUserProps = {
  route: DetailUserScreenRouteProps;
  navigation: DetailsUserScreenNavigationProp;
};
