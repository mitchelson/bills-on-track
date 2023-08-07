import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  height: auto;
  border-radius: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.grey_100};
`;

export const Box = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 20px;
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
  margin-top: 10;
`;

export const ValueTitleText = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 18px;
`;

type ValueTextProps = {
  type: "current" | "expenses" | "expected"
}

export const ValueText = styled.Text<ValueTextProps>`
  color: ${({ theme, type }) => type === "expenses" ? theme.danger : type === "current" ? theme.greenColor : theme.blueColor};
  font-size: 28px;
  margin-top: 10px;
`;

export const BoxValue = styled.View`
  padding: 10px 0px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
