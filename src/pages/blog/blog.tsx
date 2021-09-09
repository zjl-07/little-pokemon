import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

export default function Blog() {
	return (
		<>
			<Title>Oh My, This is Blog Page</Title>
		</>
	);
}
