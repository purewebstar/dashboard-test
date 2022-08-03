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
                main: `#dcdcdc`,
                dark: `#dcdcdc`, 
                light: `#dcdcdc`,
            },
            secondary: {
              main: `#ffeb3b`,
              dark: `#b2a429`, 
              light: `#ffef62`,
            },
            info: {
              main: `rgba( 20, 25, 34, 0.9)`,
              dark: `rgba(0, 169, 244, 0.4)`, 
              light: `rgba( 20, 25, 34, 0.9)`,
            },
            background: { 
              default: '#262626',
              paper: '#1a1a1a',
              
            },
            text: {
              primary: '#ffffff',
              secondary: '#bdbdbd',
            },
          }),
    },
});

export default getDesignTokens;