import styled from 'styled-components/native';
import {theme} from '../../styles';

export const Container = styled.TouchableOpacity`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 99;
  bottom: 30px;
  right: 30px;
  elevation: 5;
  background-color: ${theme.colors.secundaryBlue};
  align-items: center;
  justify-content: center;
`;
