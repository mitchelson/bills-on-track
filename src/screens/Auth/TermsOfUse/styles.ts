import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.ScrollView`
  width: 100%;
  padding: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-top: 20px;
`;

export const Description = styled.Text`
  margin-bottom: 100px;
`;
