import 'styled-components';

import LightTheme from './themes';

export type Theme = typeof LightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
