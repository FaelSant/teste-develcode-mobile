import React from 'react';
import {theme} from '../../styles';
import {GroupComponent, TextComponent} from '../../styles/components';
import {Container, EditIcon} from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

type EditableViewProps = {
  data?: string;
  handleEdit: () => void;
  headerLable: string;
  iconName: string;
};
export const EditableView: React.FC<EditableViewProps> = ({
  data,
  headerLable,
  iconName,
  handleEdit,
}) => {
  return (
    <Container>
      <GroupComponent alignItem="center" flexDirection="row">
        <EvilIcons
          color={theme.colors.primaryColor}
          name={iconName}
          size={40}
        />
        <GroupComponent>
          <TextComponent
            margin={'0px 0px 5px 10px'}
            color={theme.colors.grey}
            fontSize={theme.fontSizes.small}>
            {headerLable}
          </TextComponent>
          <TextComponent fontSize={theme.fontSizes.base} margin="0px 10px">
            {data}
          </TextComponent>
        </GroupComponent>
      </GroupComponent>
      <EditIcon onPress={handleEdit}>
        <AntDesign color={theme.colors.primaryColor} name="edit" size={20} />
      </EditIcon>
    </Container>
  );
};
