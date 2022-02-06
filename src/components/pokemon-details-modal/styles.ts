import styled from 'styled-components';

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
