import { Theme } from "@react-navigation/native";

type ColorsType = Theme["colors"];

export interface ThemeColorsType extends ColorsType {
  divider: string;
}

export type ThemeStateType = {
  theme: "dark" | "light";
  colors: ThemeColorsType;
};

export type ThemeActionsType = {
  setTheme: (theme: ThemeStateType["theme"]) => void;
};

export type ThemeContextType = {
  state: ThemeStateType;
  actions: ThemeActionsType;
};

export type ReducerActionsType = {
  type: "SET_THEME";
  payload: ThemeStateType["theme"];
};
