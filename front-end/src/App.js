import { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import List from "./list";
import Supreme from "./supreme";
import Ajouter from "./ajouter";
import Modifier from "./modifier";
import Recherche from "./recherche";
import ListSTG from "./listSTG";



function App() {
  return (
    <>
  <BrowserRouter>
        <Routes>
              <Route path="/" element={<List/>} />
              <Route path="/supreme" element={<Supreme/>} />
              <Route path="/ajouter" element={<Ajouter/>} />
              <Route path="/modifier" element={<Modifier/>} />
              <Route path="/recherche" element={<Recherche/>} />
              <Route path="/liststg" element={<ListSTG/>} />
        </Routes>
  </BrowserRouter>

      
    </>
  );
}

export default App;
