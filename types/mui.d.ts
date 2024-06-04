import '@mui/material/button';
import '@mui/material/styles';

// Extending the palette to include custom colors
interface CustomPaletteOptions {
  white: {
    main: string;
  };
  black: {
    main: string;
  };
  gray: {
    main: string;
  };
}

declare module '@mui/material/styles' {
  interface PaletteOptions
    extends import('@mui/material/styles').PaletteOptions,
      CustomPaletteOptions {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    black: true;
    gray: true;
  }
}
