import React from "react";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import { Button } from "./components/atoms/Button";
import { Title } from "./components/molecules/Title";

function App() {
  return (
    <body>
      <GlobalStyle />
      <h1>Hola</h1>
      <Title
        title="Nuestros servicios"
        description="Descripción de servicios"
      />
      <Button name="Soy un botón" link="#" />
    </body>
  );
}

export default App;
