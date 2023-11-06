import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #fff;
  margin-top: 20px;
  padding: 16px;
`;
export const Box = styled.View`
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;
export const CardAccount = styled.View`
  align-items: center;
  width: 100%;

  height: 72px;
  justify-content: space-between;
  flex-direction: row;
`;
export const TitlePage = styled.Text`
  font-size: 14px;
  font-weight: 700;
width: 100%;
color: ${({ theme }) => theme.title};
`;
export const TextTitleAccount = styled.Text`
  padding-left:10px ;
  font-size: 14px;
  font-weight: 400;
color: ${({ theme }) => theme.title};
`;
export const ValueAccount = styled.Text`
  font-size: 14px;
  text-align: right;
  width: 50%;
  font-weight: 600;
color: ${({ theme }) => theme.blueColor};
`;
export const IconCard = styled.View`
width: 40px;
height: 40px;
border-radius: 20px;
background:${({ theme }) => theme.green_500} ;
`;
export const BoxIcon = styled.View`
  background-color: #17c64f;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
export const GeneralBalance = styled.Text`
  color: ${({ theme }) => theme.grey_500};
  font-size: 12px;
  font-weight: 400;
`;
export const GeneralBalanceValue = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 16px;
  font-weight: 600;
`;
