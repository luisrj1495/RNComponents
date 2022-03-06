import React from "react";

import NavigationStack from "./src/navigation/NavigationStack";
import ThemeProvider from "./src/contexts/theme/provider";

const App = () => {
  return (
    <ThemeProvider>
      <NavigationStack />
    </ThemeProvider>
  );
};

export default App;
