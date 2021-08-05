import React from 'react';

import {Container, Title, TouchableIcon} from './styles';
import ArrowLeft from '../../assets/icons/angle-left.svg';
type HeaderProps = {
  onPress?: () => void;
  HeaderColor: string;
  title?: string;
  titleStyle?: {
    color?: string;
    fontWeight?: string | number;
    fontSize?: number;
  };
};

export const Header: React.FC<HeaderProps> = ({
  HeaderColor,
  title,
  titleStyle,
  onPress,
}) => {
  return (
    <Container HeaderColor={HeaderColor}>
      <TouchableIcon onPress={onPress}>
        <ArrowLeft />
      </TouchableIcon>
      <Title
        color={titleStyle?.color}
        fontSize={titleStyle?.fontSize}
        fontWeight={titleStyle?.fontWeight}>
        {title}
      </Title>
    </Container>
  );
};
