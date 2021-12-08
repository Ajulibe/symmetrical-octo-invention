// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
      white: string;
      black: string;
      white200: string;
      white600: string;
      white500: string;
      white800: string;
      black600: string;
      transparent: string;
      pink: string;
      darkGrey: string;
      lightBlack: string;
      orange: string;
      lightBlue: string;
      lightGreen: string;
      yellow: string;
      green100: string;
      green700: string;
      grey100: string;
      blue100: string;
      grey600: string;
      blueDark: string;
      darkWhite: string;
    };
  }
}
