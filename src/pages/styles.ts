import styled from 'styled-components';
import * as colors from '@styles/colors';

export const Section = styled.div`
	background-color: ${({ theme }) => theme.primaryColor};

	font-family: ${({ theme }) => theme.primaryFont};
	color: ${({ theme }) => theme.primaryTextColor};
	height: 100vh;
`;

export const PokemonContainer = styled.div`
	padding: 6rem 3rem 0rem 3rem;

	display: grid;
	grid-template: auto 1fr / repeat(4, 1fr);
	row-gap: 2rem;
	column-gap: 1.5rem;

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

export const PokemonCard = styled.div`
	min-height: 3rem;
	border-radius: 0.25rem;

	background-color: ${({ theme }) => theme.secondaryColor};
	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};

	transition: 0.25s ease-in;

	display: flex;
	justify-content: space-between;
	align-items: center;

	border-radius: 0.5rem;
	overflow: hidden;

	&:hover {
		box-shadow: 0.1rem 0.1rem 2rem ${({ theme }) => theme.shadowColor};
	}

	& > div {
		padding: 1rem;
		flex: 1;
	}
`;

export const SeeDetailsButton = styled.div`
	cursor: pointer;
	background-color: ${({ theme }) => theme.buttonPrimaryColor};
	color: ${colors.black[200]};

	text-align: center;
	font-weight: bold;
	height: 100%;
`;

export const ContentGridSection = styled.div`
	display: grid;
	grid-column-gap: 1rem;
	grid-row-gap: 0.5rem;

	grid-template-columns: repeat(4, 1fr);

	margin-bottom: 1rem;

	@media (max-width: 593px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const Title = styled.div`
	text-align: center;
	font-weight: bold;
	margin: 1rem 0;
`;

export const SubTitle = styled.div`
	font-weight: bold;
	font-size: small;
	margin: 0.5rem 0;
`;

export const ContentText = styled.div`
	font-size: smaller;
`;

export const Line = styled.div`
	width: 100%;
	border: 1px solid black;
`;

export const FavouriteButton = styled.div`
	cursor: pointer;
	margin-right: 0.5rem;
`;

export const PokemonCardName = styled.div`
	display: flex;
`;
