import styled from 'styled-components/native';
import {TitleProps} from '../../models/componentsTypes';
import {theme} from '../../styles';

export const Container = styled.View<{HeaderColor: string}>`
  background-color: ${({HeaderColor = theme.colors.white}) => HeaderColor};
  flex-direction: row;
  width: 100%;
  align-items: center;
  height: 60px;
`;
export const Title = styled.Text<TitleProps>`
  text-align: center;
  font-size: ${({fontSize = theme.fontSizes.largeTitle}) => fontSize + 'px'};
  font-weight: ${({fontWeight = '700'}) => fontWeight};
  color: ${({color = theme.colors.black}) => color};
  align-self: center;
`;
export const TouchableIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 10px 20px 10px 10px;
`;
