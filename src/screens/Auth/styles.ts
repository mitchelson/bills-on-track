import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.View`
  width: 100%;
`;

export const ImageWomen = styled.Image`
  width: ${Dimensions.get(`screen`).width - 40}px;
  height: ${Dimensions.get(`screen`).width - 40}px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  text-align: center;
  margin: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.grey100};
  background-color: ${({ theme }) => theme.white};
`;

export const TermText = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
`;

export const UnderlineTermText = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 15px;
  text-decoration: underline;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  text-align: center;
  margin: 12px 0px;
  font-weight: 500;
`;
