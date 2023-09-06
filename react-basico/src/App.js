import { useState } from "react";
import "./App.css";
import ManageData from "./Componentes/ManageData";
import Managelist1 from "./Componentes/Managelist1";
import ShowUserData from "./Componentes/ShowUserData";
import ShowUserData2 from "./Componentes/ShowUserData2";
import ShowUserData3 from "./Componentes/ShowUserData3";

function App() {



  return (
    <>
      <div className="App">
        <ManageData />
        <Managelist1 />
        <ShowUserData2 name= "fulano" age/>
        <ShowUserData3/>
      </div>
    </>
  );
}

export default App;
