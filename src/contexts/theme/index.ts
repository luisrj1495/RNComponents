import { useContext } from "react";
import { ThemeContext } from "./context";

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("You need the Theme context");
  return theme;
};

export const useThemeColors = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("You need the Theme context");
  return theme.state.colors;
};
