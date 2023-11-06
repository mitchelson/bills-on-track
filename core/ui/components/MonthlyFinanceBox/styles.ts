import styled from "styled-components/native";

export const BoxBalance = styled.View`
  justify-content: center;
  width: 100%;
  flex: 1;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
`;
export const BoxMoney = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const AnticipatedValue = styled.Text`
  color: ${({ theme }) => theme.title};
  font-weight: 600;
  font-size: 14px;
`;
export const Balance = styled.Text`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: 20px;
`;
export const TitleValue = styled.Text`
  color: #9e9e9e;
  font-weight: 300;
  font-size: 10px;
`;
export const TitleBalance = styled.Text`
  color: #9e9e9e;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
`;
export const Container = styled.View`
  width: 100%;
  padding: 20px 16px;
  border-radius: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
`;

export const Box = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.background};
`;

export const MonthText = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
`;

export const ValueTitleText = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 18px;
`;

type ValueTextProps = {
  type: "current" | "expenses" | "expected";
};

export const ValueText = styled.Text<ValueTextProps>`
  color: ${({ theme, type }) =>
    type === "expenses"
      ? theme.danger
      : type === "current"
      ? theme.greenColor
      : theme.blueColor};
  font-size: 28px;
  margin-top: 10px;
  font-weight: 500;
`;

export const BoxValue = styled.View`
  padding: 10px 0px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
