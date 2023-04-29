/**
 * Chakra UI Theme
 */

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
  
}

// Extend the theme

const theme = extendTheme({ config }) as { config: ThemeConfig }

export default theme