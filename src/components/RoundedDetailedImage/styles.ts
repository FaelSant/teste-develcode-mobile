import styled from 'styled-components/native';
import {theme} from '../../styles';

export const Image = styled.Image`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secundaryBlue};
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;
export const TouchableMainImage = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
`;
export const AddPhotoContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryColor};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 110px;
`;
