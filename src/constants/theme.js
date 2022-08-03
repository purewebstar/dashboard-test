// site theme modes [light, dark];

const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // LIGHT MODE
            primary: {
                main: `#e0e0e0`,
                dark: `#dcdcdc`, 
                light: `#707070`,
            },
            secondary: {
              main: `#f50057`,
              dark: `#ab003c`, 
              light: `#f73378`,
            },
            error:{
              main: `#FF6262`,
              dark: `#FF6262`, 
              light: `#FF6262`,
            },
            success:{
              main: `#FF6262`,
              dark: `#FF6262`,
              light: `#FF6262`,
            },
            info: {
              main: `rgba(255, 255, 255, 0.7)`,
              dark: `rgba(255, 255, 255, 0.7)`, 
              light: `rgba(255, 255, 255, 0.7)`,
            },
            text: {
              primary: '#0b1a16',
              secondary: '#ffffff', 
            },
            background: { 
              default: '#ffffff',
              paper: '#ffffff',
              
            },
          }
        : {
            // DARK MODE
            primary: {
              main: `#9e9e9e`,
              dark: `#6e6e6e`,
              light: `#b1b1b1`,
            },
            secondary: {
                main: `#13A77F`,
                dark: `#13A77F`,
                light: `#13A77F`,
            },
            info: {
                main: `rgba(24, 24, 24, 0.1)`,
                dark: `rgba(24, 24, 24, 0.1)`,
                light: `rgba(24, 24, 24, 0.1)`,
            },
            background: {
                default: "#1c1e24",
                paper: "#1a1e26",
            },
            text: {
                primary: "#ffffff",
                secondary: "#bdbdbd",
            },
          }),
    },
});

export default getDesignTokens;