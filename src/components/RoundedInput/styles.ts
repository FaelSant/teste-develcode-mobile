import styled from 'styled-components/native';
import {theme} from '../../styles';
import colors from '../../styles/colors';

export const Container = styled.View`
  margin-top: 15px;
`;
export const ErrorText = styled.Text`
  color: ${colors.errorColor};
  font-size: ${theme.fontSizes.small};
`;
export const HeaderContainer = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.white};
`;
export const InputBox = styled.View<{border?: string}>`
  flex-direction: row;
  border: ${({border = `1px solid ${theme.colors.primaryColor}`}) => border};
  align-items: center;
  padding: 2px 5px 2px 24px;
  border-radius: 8px;
  min-height: 48px;
  margin: 10px;
`;
export const InputText = styled.TextInput<{
  labelSize?: number;
  labelColor?: string;
}>`
  flex: 1;
  color: ${({labelColor = colors.black}) => labelColor};
  font-size: ${({labelSize = 16}) => labelSize + 'px'};
`;

export const RightComponentBox = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;
