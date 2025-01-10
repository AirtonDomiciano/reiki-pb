import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import App from "../App";
import SeeMoreReiki from "../pages/seeMoreReiki";
import SeeMoreTarot from "../pages/seeMoreTarot";
import SeeMoreHipnose from "../pages/seeMoreHipnose";
import SeeMoreConstellation from "../pages/seeMoreConstellation";

// Componente para redirecionar automaticamente para o basename
function RedirectToBase() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true }); // Redireciona para o basename
  }, [navigate]);

  return null;
}

export default function RouterSetup() {
  return (
    <BrowserRouter basename="/reiki-pb">
      <Routes>
        {/* Redireciona para a página principal quando acessa diretamente "/" */}
        <Route path="/" element={<RedirectToBase />} />

        {/* Página principal */}
        <Route path="/reiki-pb" element={<App />} />

        {/* Outras páginas */}
        <Route path="/reiki-pb/sobre-o-reiki" element={<SeeMoreReiki />} />
        <Route path="/reiki-pb/sobre-o-tarot" element={<SeeMoreTarot />} />
        <Route path="/reiki-pb/sobre-a-hipnose" element={<SeeMoreHipnose />} />
        <Route path="/reiki-pb/sobre-a-constelacao" element={<SeeMoreConstellation />} />

        {/* Rota coringa: redireciona para o basename */}
        <Route path="*" element={<Navigate to="/reiki-pb" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
