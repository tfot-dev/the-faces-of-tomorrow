import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

declare module '@material-ui/core/styles/createPalette' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Palette {
        shades: Palette['grey'];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface PaletteOptions {
        shades: PaletteOptions['grey'];
    }
}

const headingFontFamily = "'Cairo', sans-serif";
const tfotFontFamily = "'Fjalla One', sans-serif";
const otherFontFamily = "Lora', serif";

const typography = {
    h1: {
        fontFamily: tfotFontFamily,
    },
    h2: {
        fontFamily: tfotFontFamily,
    },
    h3: {
        fontFamily: headingFontFamily,
    },
    h4: {
        fontFamily: headingFontFamily,
    },
    h5: {
        fontFamily: headingFontFamily,
    },
    h6: {
        fontFamily: headingFontFamily,
    },
    subtitle1: {
        fontFamily: otherFontFamily,
    },
    subtitle2: {
        fontFamily: otherFontFamily,
    },
    body1: {
        fontFamily: otherFontFamily,
    },
    body2: {
        fontFamily: otherFontFamily,
    },
    button: {
        fontFamily: otherFontFamily,
    },
    caption: {
        fontFamily: otherFontFamily,
    },
    overline: {
        fontFamily: otherFontFamily,
    },
};

export const theme = (darkMode: boolean): Theme =>
    darkMode
        ? createMuiTheme({
              palette: {
                  type: 'dark',
                  primary: {
                      main: '#8EA480',
                  },
                  secondary: {
                      main: '#775447',
                  },
                  shades: {
                      50: 'rgba(0,0,0,0.8)',
                      100: 'rgba(0,0,0,0.9)',
                  },
              },
              typography,
          })
        : createMuiTheme({
              palette: {
                  primary: {
                      main: '#8EA480',
                  },
                  secondary: {
                      main: '#775447',
                  },
                  shades: {
                      50: '#fafafa',
                      100: '#f5f5f5',
                  },
              },
              typography,
          });
