import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle";
import "./style/normalize.css";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupIntroPage from "./pages/SignupPage/SignupIntroPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import SignupNamePage from "./pages/SignupPage/SignupNamePage.jsx";
import SignupCodeInputPage from "./pages/SignupPage/SignupCodeInputPage.jsx";

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
          <Route path="/month" element={<CalendarPage />} />
          <Route path="/signupname" element={<SignupNamePage />} />
          <Route path="/signupcodeinput" element={<SignupCodeInputPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
