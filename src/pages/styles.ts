import styled from 'styled-components';

export const Section = styled.section`
	background-color: ${({ theme }) => theme.primaryColor};
	height: 100vh;
	font-family: ${({ theme }) => theme.primaryFont};
`;

export const Content = styled.div`
	margin: 2rem 3rem;
`;

//which on is better ? rem or px
