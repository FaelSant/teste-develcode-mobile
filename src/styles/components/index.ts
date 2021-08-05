import styled from 'styled-components/native';
import {theme} from '../';
import {
  ContainerProps,
  GroupComponentsProps,
  TextComponentsProps,
} from '../../models/componentsTypes';
import colors from '../colors';

export const Container = styled.View<ContainerProps>`
  height: ${({height = '100%'}) => {
    if (typeof height === 'string') {
      return height;
    }
    return height + 'px';
  }};
  background-color: ${({background = theme.colors.white}) => background};
  padding: 10px 30px 30px 30px;
`;

export const TextComponent = styled.Text<TextComponentsProps>`
  font-size: ${({fontSize = theme.fontSizes.base}) => fontSize + 'px'};
  font-weight: ${({fontWeight = '500'}) => fontWeight};
  color: ${({color = colors.black}) => color};
  margin: ${({margin = '0px 0px 0px 0px'}) => margin};
  text-align: ${({textAlign = 'left'}) => textAlign};

  font-family: Ubuntu-Regular;
`;
export const GroupComponent = styled.View<GroupComponentsProps>`
  flex-direction: ${({flexDirection = 'column'}) => flexDirection};
  align-items: ${({alignItem = 'flex-start'}) => alignItem};
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
  margin-top: ${({marginTop = 0}) => marginTop + 'px'};
  margin-left: ${({marginLeft = 0}) => marginLeft + 'px'};
  border-bottom-width: ${({borderBottomWidth = 0}) => borderBottomWidth + 'px'};
  border-bottom-color: ${({borderColor = 'white'}) => borderColor};
  padding: ${({padding = 0}) => padding + 'px'};
  opacity: ${({opacity = 1}) => opacity};
  flex-wrap: ${({flexWrap = 'nowrap'}) => flexWrap};
`;
