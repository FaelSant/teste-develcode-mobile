import React, {ChangeEvent, ReactNode} from 'react';

import {Text, TouchableHighlight} from 'react-native';
import {TextComponent} from '../../styles/components';
import CalendarIcon from '../../assets/icons/calendar.svg';
import {
  Container,
  ErrorText,
  HeaderContainer,
  InputBox,
  InputText,
  RightComponentBox,
} from './styles';

interface RoundedInputProps {
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  valueOfInputText?: string;
  hasError?: boolean;
  errorText?: string;
  isMultline?: boolean;
  border?: string;
  labelColor?: string;
  label: string;
  rightComponent?: ReactNode;
}

export const RoundedInput: React.FC<RoundedInputProps> = ({
  border,
  errorText,
  hasError = false,
  isMultline = false,
  labelColor,
  onChangeText,
  valueOfInputText,
  label,
  rightComponent,
}) => {
  const hasValidationError = !!(hasError && errorText);
  return (
    <Container>
      <HeaderContainer>
        <TextComponent margin="0px 20px">{label}</TextComponent>
        {hasValidationError && <ErrorText>{errorText}</ErrorText>}
      </HeaderContainer>
      <InputBox border={border}>
        <InputText
          multiline={isMultline}
          labelColor={labelColor}
          value={valueOfInputText}
          onChangeText={onChangeText}
        />
        {rightComponent && (
          <RightComponentBox>{rightComponent}</RightComponentBox>
        )}
      </InputBox>
    </Container>
  );
};

export default RoundedInput;
