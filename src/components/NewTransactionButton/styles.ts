import { osName } from 'expo-device';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  border-radius: 60px;
  width: 60px;
  height: 60px;

  align-items: center;
  justify-content: center;

  bottom: 20px;
  right: 20px;

  background-color: ${({ theme }) => theme.primary};

  ${osName === "ios" ?
    ` shadowColor: '#ccc',
      shadowOffset: '2px 4px',
      shadowOpacity: '0.2',
      shadowRadius: 15`
    :
    `elevation: '20'`
  }
`;
