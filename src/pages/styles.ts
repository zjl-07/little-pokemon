import styled from 'styled-components';

export const Section = styled.div`
	background-color: ${({ theme }) => theme.primaryColor};

	font-family: ${({ theme }) => theme.primaryFont};
	color: ${({ theme }) => theme.primaryTextColor};
`;

export const Header = styled.div`
	position: relative;
	top: 5rem;
	margin-bottom: 7rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 512px) {
		& > div,
		input {
			width: 100%;
			margin-bottom: 1rem;
		}
	}
`;

export const Content = styled.div`
	margin: 2rem 3rem;
`;
