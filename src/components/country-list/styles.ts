import { typeScale } from '@styles/typography';
import styled from 'styled-components';

export const CountryContainer = styled.div`
	margin-top: 2rem;
	padding-bottom: 3rem;

	display: grid;
	grid-template: auto 1fr / repeat(4, 1fr);
	row-gap: 2rem;
	column-gap: 1rem;

	@media (max-width: 1110px) {
		grid-template: repeat(1, 1fr) / repeat(3, 1fr);
	}

	@media (max-width: 880px) {
		grid-template: repeat(1, 1fr) / repeat(2, 1fr);
	}

	@media (max-width: 593px) {
		grid-template: repeat(1, 1fr) / repeat(1, 1fr);
	}
`;

export const CountryCard = styled.div`
	cursor: pointer;

	min-height: 20rem;
	width: 15rem;

	justify-self: center;
	border-radius: 0.25rem;
	overflow: hidden;

	background-color: ${({ theme }) => theme.secondaryColor};
	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};

	transition: 0.25s ease-in;

	&:hover {
		box-shadow: 0.1rem 0.1rem 2rem ${({ theme }) => theme.shadowColor};
	}
`;

export const Content = styled.div`
	padding: 0 1rem;

	font-size: ${typeScale.header3};
	line-height: 2rem;
`;

export const Title = styled.div`
	font-size: ${typeScale.header3};
	font-weight: bold;
	line-height: 3rem;
`;

export const Description = styled.div`
	font-size: ${typeScale.paragraph};
	line-height: 1.2rem;
`;
