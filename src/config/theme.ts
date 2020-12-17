import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        shades: Palette['grey'];
    }
    interface PaletteOptions {
        shades: PaletteOptions['grey'];
    }
}

export const theme = (darkMode: boolean) =>
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
                      50: '#9e9e9e',
                      100: '#757575',
                      200: '#616161',
                      300: '#424242',
                      400: '#212121',
                  },
              },
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
                      200: '#eeeeee',
                      300: '#e0e0e0',
                      400: '#bdbdbd',
                  },
              },
          });
