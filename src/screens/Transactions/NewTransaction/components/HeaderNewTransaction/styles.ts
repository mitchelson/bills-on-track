import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  `;

type TypeBox = {
  activeType: "income" | "outcome";
  type: "income" | "outcome";
}

export const TypeBox = styled.TouchableOpacity<TypeBox>`
  width: ${Dimensions.get("screen").width / 2}px;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: ${({ theme, activeType, type }) => activeType === type ? type === "income" ? theme.green_500 : theme.red_500 : theme.grey_200};
`;

export const TypeText = styled.Text<TypeBox>`
  margin-left: 10px;
`;
