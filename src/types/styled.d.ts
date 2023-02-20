// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundMain: string;
      backgroundSecondary: string;
      cardBackground: string;
      textMain: string;
      textSecondary: string;
      placeholderText: string;
      accent: string;
    };
  }
}
