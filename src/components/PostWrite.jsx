// 글작성
import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import TextInput from './ui/TextInput';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	width: calc(100%-32px);

	align-items: center;
	justify-content: center;
`;
const Container = styled.div`
	width: 100%;
	min-width: 720px;
	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

const PostWrite = () => {
	const [title, setTitle] = useState();
	const [content, setContent] = useState();
	const navigate = useNavigate();
	return (
		<Wrapper>
			<Container>
				<TextInput
					height={20}
					value={title}
					onChange={(evt) => {
						setTitle(evt.target.value);
					}}
				/>
				<TextInput
					height={480}
					value={content}
					onChange={(evt) => {
						setContent(evt.targer.value);
					}}
				/>
				<Button
					title="글 작성하기"
					onClick={() => {
						navigate('/');
					}}
				/>
			</Container>
		</Wrapper>
	);
};

export default PostWrite;
