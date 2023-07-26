import styled from "styled-components/native";

type ButtonProps = {
  loading?: boolean;
  type?: "primary" | "secondary" | "outline";
  text: string;
  disabled?: boolean;
  width?: number;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${({ width }) => (width ? width : 100)}%;
  height: 48px;
  border-radius: 8px;

  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 10px 0;

  background-color: ${({ theme, type, loading, disabled }) =>
    disabled && type !== "outline"
      ? theme.buttonDisabled
      : !type || type === "primary"
        ? theme.primaryButton
        : type === "secondary"
          ? theme.secondaryButton
          : "transparent"};

  border-color: ${({ theme, disabled }) =>
    disabled ? theme.buttonDisabled : theme.white};
  border-width: ${({ type }) => (type && type === "outline" ? "1px" : 0)};
`;

export const Text = styled.Text<ButtonProps>`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  color: ${({ theme, type, disabled }) =>
    disabled
      ? type !== "outline"
        ? theme.textButtonDisabled
        : theme.textButtonOutlineDisabled
      : type && type === "outline"
        ? theme.white
        : theme.grey200};
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(
  ({ theme }) => ({ color: theme.white }),
)``;
