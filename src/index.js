import './index.css';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import SeeMoreReiki from './pages/seeMoreReiki';
import SeeMoreTarot from './pages/seeMoreTarot';
import SeeMoreHipnose from './pages/seeMoreHipnose';
import SeeMoreConstellation from './pages/seeMoreConstellation';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
        {/* Rota Principal */}
        <Route path="/" element={<App />} />

        {/* Outras Rotas */}
        <Route path="sobre-o-reiki" element={<SeeMoreReiki />} />
        <Route path="sobre-o-tarot" element={<SeeMoreTarot />} />
        <Route path="sobre-a-hipnose" element={<SeeMoreHipnose />} />
        <Route path="sobre-a-constelacao" element={<SeeMoreConstellation />} />

        {/* Rota Coringa (Redireciona para a Página Principal) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      {/* <Route path="latter" element={<PageLatter />} /> */}
    </Routes>
  </BrowserRouter>
);