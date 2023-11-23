import { osName } from "expo-device";
import { initialWindowMetrics } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const UserImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #F2F4EF;
`;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  
  background-color: #F2F4EF;
`;

export const Content = styled.ScrollView`
  padding: 16px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.white};
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
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
`;

export const TitleValue = styled.Text`
  color: #9E9E9E;
  font-weight: 300;
  font-size: 10px;
`;
export const AnticipatedValue = styled.Text`
  color: ${({ theme }) => theme.title};
  font-weight: 600;
  font-size: 14px;
`;
export const TitleValue = styled.Text`
  color: #9E9E9E;
  font-weight: 300;
  font-size: 10px;
`;

export const BalanceCents = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 25px;
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

export const Header = styled.View`
  width: 100%;
  background-color: #16C64F;
  flex-direction: row;
  align-items: center;
  padding: ${(initialWindowMetrics?.insets.top || 0) + 16}px 16px 16px 16px;
`;

export const Row = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Box = styled.View`
  margin-left: 5px;
`;

export const BoxAvatar = styled.View``;

export const BoxIcon = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: white;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1;
  bottom: 0px;
  right: 5px;
`;



export const Notification = styled.TouchableOpacity`
width: 48px;
height: 48px;
align-items: center;
justify-content: center;
border-radius: 8px;
background-color: ${({ theme }) => theme.greenColor};
`;
