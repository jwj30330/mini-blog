import React from 'react';
import CommentListItem from './CommentListItem';
import { styled } from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

const CommentList = ({ comments }) => {
	return (
		<Wrapper>
			{comments.map((comment, idx) => {
				return <CommentListItem key={comment.id} comment={comment} />;
			})}
		</Wrapper>
	);
};

export default CommentList;
