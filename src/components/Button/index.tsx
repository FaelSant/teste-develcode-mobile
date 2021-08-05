import {theme} from '../../styles';
import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {Container, Label} from './styles';

import {TextComponent} from '../../styles/components';
interface ButtonProps {
  onPress:
    | (((event: GestureResponderEvent) => void) &
        ((e: GestureResponderEvent) => void))
    | undefined;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  width?: string | number;
  labelColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  backgroundColor,
  margin,
  padding,
  width,
  labelColor,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      onPress={onPress}
      width={width}>
      <TextComponent color={labelColor ? labelColor : theme.colors.white}>
        {children}
      </TextComponent>
    </Container>
  );
};

export default Button;
