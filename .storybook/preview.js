import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Basic theme for now
const theme = createTheme({
  palette: {
    primary: {
      main: '#0068A9', // Your brand[500] color
    },
  },
});

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => React.createElement(ThemeProvider, { theme }, 
      React.createElement(CssBaseline),
      React.createElement(Story)
    ),
  ],
};

export default preview;