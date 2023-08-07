import { BaseTheme } from '@core/ui';

declare module 'styled-components/native' {
  export interface DefaultTheme extends BaseTheme { }
}
