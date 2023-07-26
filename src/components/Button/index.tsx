import React from "react";
import * as S from "./styles";

type ButtonProps = {
  loading?: boolean;
  type?: "primary" | "secondary" | "outline";
  text: string;
  disabled?: boolean;
  width?: number;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <S.Container disabled={props.loading || props.disabled} {...props}>
      <S.Text {...props}>
        {props.loading ? <S.ActivityIndicator /> : props.text}
      </S.Text>
    </S.Container>
  );
};

export default Button;
