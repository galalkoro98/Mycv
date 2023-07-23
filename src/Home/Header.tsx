import React from "react";
import "./styles/Header.css";
import { Home } from "./Home";

export const Header: React.FC = () => {
  return (
    <header className="section sec1 header active" id="home">
      <Home />
    </header>
  );
};
