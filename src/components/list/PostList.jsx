import React from 'react';
import PostListItem from './PostListItem';
import { styled } from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
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

const PostList = ({ posts, onClickItem }) => {
	return (
		<Wrapper>
			{posts.map((post, idx) => {
				return (
					<PostListItem
						key={post.id}
						post={post}
						onClick={() => {
							onClickItem(post);
						}}
					/>
				);
			})}
		</Wrapper>
	);
};

export default PostList;
