import { useState } from "react";
import "./App.css";
import ManageData from "./Componentes/ManageData";
import Managelist1 from "./Componentes/Managelist1";

function App() {
  return (
    <>
      <div className="App">
        <ManageData />
        <Managelist1 />
      </div>
    </>
  );
}

export default App;
