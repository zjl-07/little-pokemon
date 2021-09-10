import styled from 'styled-components';

export const Section = styled.section`
	height: 100vh;
	background-color: ${({ theme }) => theme.primaryColor};

	font-family: ${({ theme }) => theme.primaryFont};
	color: ${({ theme }) => theme.primaryTextColor};
`;

export const Content = styled.div`
	margin: 2rem 3rem;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
