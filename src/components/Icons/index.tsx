import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { IconsProps } from "../../types";

const Icons: React.FC<IconsProps> = ({ name, color, style }) => {
  return <Feather name={name} size={32} color={color || "#333"} style={style} />;
};

export default Icons;
