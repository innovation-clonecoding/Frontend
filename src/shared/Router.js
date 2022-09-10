import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginTestPage from "../pages/LoginTestPage";
import WritePage from "../pages/WritePage";
import RegisterPage from "../pages/RegisterPage";
import SearchPage from "pages/SearchPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* 모달 테스트 페이지 */}
        <Route path="/test" element={<LoginTestPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
