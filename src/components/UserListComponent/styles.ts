import styled from 'styled-components/native';
import {theme} from '../../styles';

export const Container = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  flex-direction: row;
  margin-bottom: 10px;
`;
export const Image = styled.Image`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secundaryBlue};
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50px;
`;
export const ArrowRight = styled.View`
  position: absolute;
  right: 0px;
  bottom: 25%;
`;
