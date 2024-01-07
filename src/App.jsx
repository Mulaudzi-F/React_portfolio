import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidenav from "./components/sideNav";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Skills from "./components/skills";
import Project from "./components/Projects";
import Contact from "./components/contact";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <BrowserRouter>
      <div className="portfolio">
        <Sidenav />
        <main>
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="skills" element={<Skills />} />
              <Route path="project" element={<Project />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
