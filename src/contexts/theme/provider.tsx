import React, { useEffect, useReducer } from "react";

import { ThemeContext } from "./context";
import { reducer } from "./reducer";
import { INITIAL_STATE, darkTheme, lightTheme } from "./utils";

import { ThemeActionsType } from "./types";
import { Appearance, AppState, useColorScheme } from "react-native";

const Provider: React.FC = ({ children }) => {
  const colorScheme = useColorScheme();
  const [state, dispatch] = useReducer(
    reducer,
    colorScheme === "dark" ? darkTheme : lightTheme,
  );

  const setTheme: ThemeActionsType["setTheme"] = payload =>
    dispatch({ type: "SET_THEME", payload });

  // Other way to listed when the user change dark or light in the device
  useEffect(() => {
    AppState.addEventListener("change", status => {
      if (status == "active") {
        if (Appearance.getColorScheme() === "dark") setTheme("dark");
        else setTheme("light");
      }
    });
  }, []);

  useEffect(() => {
    if (colorScheme === "dark") setTheme("dark");
    else setTheme("light");
  }, [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        state,
        actions: {
          setTheme,
        },
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;
