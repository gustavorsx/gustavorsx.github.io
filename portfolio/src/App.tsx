import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Curriculo from "./screens/Curriculo";
import { RouteList } from "./shared/routing/routeList";
import Projetos from "./screens/Projetos";
import Clientes from "./screens/Clientes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={RouteList.curriculo} element={<Curriculo />}></Route>
        <Route path={RouteList.projetos} element={<Projetos />}></Route>
        <Route path={RouteList.clientes} element={<Clientes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
