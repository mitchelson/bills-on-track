import React from "react";
import { TextInputProps } from "react-native";
import * as S from "./styles";

interface InputProps extends TextInputProps {
  label: string;
  placeholder: string;
}

const InputForm = (props: InputProps) => {
  return (
    <S.Container>
      <S.Label>{props.label}</S.Label>
      <S.Input {...props} />
    </S.Container>
  );
};

export default InputForm;
