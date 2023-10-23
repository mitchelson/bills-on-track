import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 16px;
  align-items: center;
  flex: 1;
`;

export const LineOfModal = styled.View`
  width: 100px;
  height: 3px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.grey_200};
  border-radius: 10px;
`;

export const TitleText = styled.Text`
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

interface SelectorProps {
  selectCategory: boolean;
}

export const Selector = styled.View<SelectorProps>`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, selectCategory }) => selectCategory ? theme.green_500 : theme.grey_300};
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

export const BoxButton = styled.View`
  width: 100%;
  padding: 0 16px;
`;
