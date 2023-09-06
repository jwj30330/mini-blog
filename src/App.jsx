import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import PostWrite from './components/PostWrite';
import PostViewPage from './components/PostViewPage';
import { styled } from 'styled-components';

const MainTitleText = styled.p`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
`;
const App = () => {
	return (
		<BrowserRouter>
			<MainTitleText>미니블로그</MainTitleText>
			<Routes>
				<Route index element={<MainPage />}></Route>
				<Route path="post-write" element={<PostWrite />}></Route>
				<Route path="post/:postId" element={<PostViewPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
