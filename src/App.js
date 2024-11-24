import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle";
import "./style/normalize.css";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupIntroPage from "./pages/SignupPage/SignupIntroPage.jsx";
import SignupNamePage from "./pages/SignupPage/SignupNamePage.jsx";
import SignupCodeInputPage from "./pages/SignupPage/SignupCodeInputPage.jsx";
import SignupSetHomePage from "./pages/SignupPage/SignupSetHomePage.jsx";
import SignupGenerateCodePage from "./pages/SignupPage/SignupGenerateCodePage.jsx";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signupintro" element={<SignupIntroPage />} />
          <Route path="/signupname" element={<SignupNamePage />} />
          <Route path="/signupcodeinput" element={<SignupCodeInputPage />} />
          <Route path="/signupsethome" element={<SignupSetHomePage />} />
          <Route
            path="/signupgeneratecode"
            element={<SignupGenerateCodePage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
