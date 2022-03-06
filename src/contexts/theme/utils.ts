import { DefaultTheme, DarkTheme } from "@react-navigation/native";

import { ThemeStateType, ThemeColorsType } from "./types";

export const DARK_THEME_COLORS: ThemeColorsType = {
  ...DarkTheme.colors,
  background: "#1f2028",
  divider: "rgba(0,0,0,0.7)",
};

export const LIGHT_THEME_COLORS: ThemeColorsType = {
  ...DefaultTheme.colors,
  divider: "rgba(0,0,0,0.7)",
};

export const THEME_COLOR = {
  dark: DARK_THEME_COLORS,
  light: LIGHT_THEME_COLORS,
};

export const INITIAL_STATE: ThemeStateType = {
  theme: "dark",
  colors: DARK_THEME_COLORS,
};

export const darkTheme = {
  theme: "dark",
  colors: DARK_THEME_COLORS,
};

export const lightTheme = {
  theme: "light",
  colors: LIGHT_THEME_COLORS,
};
