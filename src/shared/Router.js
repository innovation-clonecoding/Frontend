import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginTestPage from "../pages/LoginTestPage";
import DetailPage from "pages/DetailPage";
import WritePage from "../pages/WritePage";
import RegisterPage from "../pages/RegisterPage";
import SearchPage from "pages/SearchPage";
import SettingPage from "pages/SettingPage";
import MyvelogPage from "pages/MyvelogPage";
import TestComment from "pages/TestComment";
import EditPage from "pages/EditPage";
import Kakao from "components/login/kakao/Kakao";
import LikePage from "pages/LikePage";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				{/* 모달 테스트 페이지 */}
				<Route path="/test" element={<LoginTestPage />} />
				<Route path="/write" element={<WritePage />} />
				<Route path="/edit/:postId" element={<EditPage />} />
				<Route path="/detail/:postId" element={<DetailPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/setting" element={<SettingPage />} />
				<Route path="/myvelog" element={<MyvelogPage />} />
				<Route path="/myvelog/:nickname" element={<MyvelogPage />} />
				<Route path="/comment" element={<TestComment />} />
				<Route path="/oauth" element={<Kakao />} />
				<Route path="like" element={<LikePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
