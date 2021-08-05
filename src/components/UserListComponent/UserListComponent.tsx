import React from 'react';
import {GroupComponent, TextComponent} from '../../styles/components';
import {Container, Image, ArrowRight} from './styles';
import CalendarIcon from '../../assets/icons/calendar.svg';
import ArrowIcon from '../../assets/icons/arrow-right.svg';
import {theme} from '../../styles';
type userListProps = {
  name: string;
  imageUri: string;
  age: string;
};

export const UserListComponent: React.FC<userListProps> = ({
  age,
  imageUri,
  name,
}) => {
  return (
    <Container>
      <Image
        source={{
          uri: imageUri,
        }}
      />
      <GroupComponent>
        <TextComponent fontSize={theme.fontSizes.base}>{name}</TextComponent>
        <GroupComponent flexDirection="row" alignItem={'center'}>
          <CalendarIcon />
          <TextComponent fontSize={theme.fontSizes.small} margin="0px 10px">
            {age}
          </TextComponent>
        </GroupComponent>
      </GroupComponent>
      <ArrowRight>
        <ArrowIcon />
      </ArrowRight>
    </Container>
  );
};
