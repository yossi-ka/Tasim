import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { heIL } from "@mui/material/locale/index.js";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "Rubik, Arial, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
            body {
              direction: rtl;
            }
          `,
      },
    },
  },
  heIL
);

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function MuiRtl() {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl} />
    </ThemeProvider>
  );
}

export default MuiRtl;
