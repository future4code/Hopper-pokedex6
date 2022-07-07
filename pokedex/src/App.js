import React from "react";
import GlobalState from "./global/GlobalState";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}
export default App;