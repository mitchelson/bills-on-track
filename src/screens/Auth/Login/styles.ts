import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.ScrollView`
  padding: 20px;
`;

export const Box = styled.View`
  width: 100%;
  align-items: center;
`;

export const BoxRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BoxLeft = styled.View`
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
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const TitleLogin = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 18px;
  text-align: center;
  font-weight: 200;
`;

export const Button = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  margin: 10px 10px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.grey_100};
  background-color: ${({ theme }) => theme.white};
`;

export const TermText = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
`;

export const UnderlineTermText = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.primary};
`;

export const ForgotPassText = styled.Text`
  color: ${({ theme }) => theme.grey100};
  font-size: 15px;
  text-decoration: underline;
  margin: 10px 0;
  text-decoration-color: ${({ theme }) => theme.grey100};
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  text-align: center;
  margin: 12px 0px;
  font-weight: 500;
`;
