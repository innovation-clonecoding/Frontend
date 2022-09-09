import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginTestPage from "../pages/LoginTestPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* 모달 테스트 페이지 */}
        <Route path="/test" element={<LoginTestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
