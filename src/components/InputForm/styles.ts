
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
`;

export const Label = styled.Text`
  font-weight: 200;
  font-size: 15px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({ placeholderTextColor: theme.grey_300 }))`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 5px 10px;
  border-color: ${({ theme }) => theme.grey_100};
  border-width: 1px;
  margin-top: 10px;
`;
