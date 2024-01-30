export default {
  grid: {
    container: '1200px',
  },
  border: {
    radius: {
      xsmall: '4px',
      small: '6px',
      medium: '8px',
    },
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '12px',
      small: '14px',
      medium: '16px',
    },
  },
  colors: {
    textPrimary: '#030517',
    mainBg: '#ebebeb',
    yellowBg: '#ffe600',
    white: '#fff',
    blue: ' #3483fa',
    blueDark: '#2968c8',
    blueMediumLight: '#4189e6',
    blueLight: '#579af2',
  },
  spacings: {
    xsmall: '4px',
    small: '8px',
  },
} as const;
