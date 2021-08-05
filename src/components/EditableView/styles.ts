import styled from 'styled-components/native';
import {theme} from '../../styles';
export const Container = styled.View`
  background-color: ${theme.colors.white};
  flex-direction: row;
  margin: 10px 0px;
  align-items: center;
`;
export const EditIcon = styled.TouchableOpacity`
  position: absolute;
  right: -15px;
  top: -10px;
  padding: 20px;
`;
