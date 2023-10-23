import { Dimensions } from "react-native";
import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const CategoryText = styled.Text`
  font-size: 17px;
  font-weight: 300;
  text-align: center;
  margin-left: 8px;
  color: ${props => props.theme.text_300};
`;

export const BoxCategory = styled.TouchableOpacity`
  width: ${Dimensions.get("screen").width - 32}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  border-bottom-width: 1px;
  padding-bottom: 12px;
  border-color: ${({ theme }) => theme.grey_200};
`;
