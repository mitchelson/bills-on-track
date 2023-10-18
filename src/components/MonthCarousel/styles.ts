import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PrevNextButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${(Dimensions.get("screen").width - (16 * 2) - 130) / 2}px;
`;

export const CurrentButton = styled.View`
  border-radius: 50px;
  background-color: #008440;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const PrevNextMonth = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const CurrentMonth = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
