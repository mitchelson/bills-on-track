import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-size: 30px;
  font-weight: bold;
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
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.title};
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.black};
  font-size: 20px;
  text-align: center;
  margin: 12px 0px;
  font-weight: 500;
`;