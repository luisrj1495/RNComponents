import { THEME_COLOR } from "./utils";

// Types
import { ReducerActionsType, ThemeStateType } from "./types";

export const reducer = (
  state: ThemeStateType,
  action: ReducerActionsType,
): ThemeStateType => {
  switch (action.type) {
    case "SET_THEME": {
      return { theme: action.payload, colors: THEME_COLOR[action.payload] };
    }

    default: {
      return state;
    }
  }
};
