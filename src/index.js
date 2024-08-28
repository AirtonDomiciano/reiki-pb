import './index.css';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SeeMoreReiki from './pages/seeMoreReiki';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="sobre-o-reiki" element={<SeeMoreReiki />} />
      {/* <Route path="latter" element={<PageLatter />} /> */}
    </Routes>
  </BrowserRouter>
);