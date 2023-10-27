import styled from 'styled-components/native';

export const BoxIconBar = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

type IndicatorBarProps = {
  focused: boolean;
}

export const IndicatorBar = styled.View<IndicatorBarProps>`
  width: 48px;
  height: 4px;
  border-radius: 8px;
  background-color: ${({ focused }) => focused ? "#16C64F" : "transparent"} ;
  position: absolute;
  top: -12px;
`;
