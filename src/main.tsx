import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { NotFound } from "./pages/404";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
