import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Main Routes file
import Routes from "./Routes";

// Importing Store file (Redux)
import Store from "./Store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter basename="/">
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
