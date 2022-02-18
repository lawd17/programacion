import React from "react";
import Card from "./components/Card";
import PintarCartas from "./components/pintarCartas";

function App() {
  return (
    <div className="container">
      <div className="row">
        <PintarCartas></PintarCartas>
      </div>
    </div>
  );
}

export default App;
