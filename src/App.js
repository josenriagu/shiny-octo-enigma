import React from "react";
import { Grommet } from "grommet";

import { theme } from "./theme";
import { AppBar } from "./components/AppBar";

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>Hello World</AppBar>
    </Grommet>
  );
}

export default App;
