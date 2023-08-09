import { BaseTheme } from "./src/theme/colors";

declare module 'styled-components/native' {
  export interface DefaultTheme extends BaseTheme { }
}
