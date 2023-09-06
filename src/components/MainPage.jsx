//가장 첫 화면-글 작성버튼, 글 목록버튼

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from './list/PostList';
import { styled } from 'styled-components';
import data from '../data.json';
import Button from './ui/Button';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100%-32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Container = styled.div`
	width: 100%;
	max-width: 720px;
	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

const MainPage = () => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<Container>
				<Button
					title="	글 작성"
					onClick={() => {
						navigate('/post-write');
					}}
				></Button>
				<PostList
					posts={data}
					onClickItem={(item) => {
						navigate(`/post/${item.id}`);
					}}
				></PostList>
			</Container>
		</Wrapper>
	);
};

export default MainPage;
