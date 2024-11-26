import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle";
import "./style/normalize.css";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupIntroPage from "./pages/SignupPage/SignupIntroPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import SignupNamePage from "./pages/SignupPage/SignupNamePage.jsx";
import SignupCodeInputPage from "./pages/SignupPage/SignupCodeInputPage.jsx";
import SignupSetHomePage from "./pages/SignupPage/SignupSetHomePage.jsx";
import SignupGenerateCodePage from "./pages/SignupPage/SignupGenerateCodePage.jsx";
import SignupCharacterPage from "./pages/SignupPage/SignupCharacterPage.jsx";
import SignupBestWorkPage from "./pages/SignupPage/SignupBestWorkPage.jsx";
import SignupKkaebiCommentPage from "./pages/SignupPage/SignupKkaebiCommentPage.jsx";
import DayPage from "./pages/DayPage.jsx";

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
          <Route path="/day" element={<DayPage />} />
          <Route path="/signupname" element={<SignupNamePage />} />
          <Route path="/signupcodeinput" element={<SignupCodeInputPage />} />
          <Route path="/signupsethome" element={<SignupSetHomePage />} />
          <Route
            path="/signupgeneratecode"
            element={<SignupGenerateCodePage />}
          />
          <Route path="/signupcharacter" element={<SignupCharacterPage />} />
          <Route path="/signupbestwork" element={<SignupBestWorkPage />} />
          <Route
            path="/signupkkaebicomment"
            element={<SignupKkaebiCommentPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
