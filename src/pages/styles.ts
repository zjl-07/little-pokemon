import styled from 'styled-components';

export const Section = styled.section`
	background-color: ${({ theme }) => theme.primaryColor};
	height: 100vh;
	font-family: ${({ theme }) => theme.primaryFont};
`;

export const Content = styled.div`
	margin: 2rem 3rem;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

//which on is better ? rem or px
