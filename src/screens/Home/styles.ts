import { osName } from "expo-device";
import styled from "styled-components/native";

export const UserImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #fff;
`;

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 16px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 25px;
  font-weight: bold;
`;

export const BoxBalance = styled.View`
  justify-content: center;
  padding: 20px;
  width: 100%;
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.grey_100};
`;

export const TitleBalance = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Balance = styled.Text`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: 30px;
`;

export const BalanceCents = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 30px;
`;

export const BalanceContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  ${osName === "ios" ?
    ` shadowColor: '#ccc',
      shadowOffset: '2px 4px',
      shadowOpacity: '0.2',
      shadowRadius: 15`
    :
    `elevation: '20'`
  }
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const Row = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Box = styled.View``;

export const BoxMoney = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Notification = styled.TouchableOpacity`
width: 48px;
height: 48px;
align-items: center;
justify-content: center;
border-radius: 8px;
background-color: ${({ theme }) => theme.greenColor};
`;
