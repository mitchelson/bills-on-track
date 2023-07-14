import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const TitlePage = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.title};
`;