import React from 'react';
import { styled } from 'styled-components';

const StyledTextInput = styled.textarea`
	width: calc(100%-32px);
	${(props) => props.height && `height:${props.height}px;`}
	padding: 16px;
	font-size: 16px;
	line-height: 20px;
`;
const TextInput = ({ height, value, onChange }) => {
	return <StyledTextInput height={height} value={value} onChange={onChange}></StyledTextInput>;
};

export default TextInput;
