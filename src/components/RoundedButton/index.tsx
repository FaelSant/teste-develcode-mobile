import React from 'react';
import {Container} from './styles';
import PlusIcon from '../../assets/icons/plus.svg';
interface RoundedButtonProps {
  onPress: () => void;
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({onPress}) => {
  return (
    <Container onPress={onPress}>
      <PlusIcon />
    </Container>
  );
};
